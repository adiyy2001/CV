using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using CV.Functions.Models;
using System.Text.RegularExpressions;

namespace CV.Functions
{
    public static class SendEmail
    {
        [FunctionName("SendEmail")]
        public static async Task<ResponseModel> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = null)] HttpRequest req,
            [Queue("emailqueue"), StorageAccount("AzureWebJobsStorage")] ICollector<ContactEmailModel> msg,
            ILogger log)
        {

            var formdata = await req.ReadFormAsync();
            
            if(formdata["from"] == "" ||
                formdata["body"] == "" ||
                formdata["subject"] == "")
            {
                return new ResponseModel
                {
                    statusCode = 422,
                    message = "Missing parameter",
                    value = formdata
                };
            }

            ContactEmailModel contact = new ContactEmailModel()
            {
                body = formdata["body"],
                from = formdata["from"],
                subject = formdata["subject"]
            };


            Regex regex = new Regex(@"^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$");
            if (!regex.IsMatch(contact.from))
            {
                return new ResponseModel
                {
                    statusCode = 422,
                    message = "Invalid email address"
                };
            }
            msg.Add(contact);

            return new ResponseModel
            {
                statusCode = 202,
                message = "Accepted",
                value = contact
            };
        }
    }
}
