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
            string from = req.Query["from"];
            string body = req.Query["body"];
            string subject = req.Query["subject"];
            
            if(from == "" ||
                body == "" ||
                subject == "" ||
                from == null ||
                body == null ||
                subject == null)
            {
                return new ResponseModel
                {
                    statusCode = 422,
                    message = "Missing parameter"
                };
            }

            Regex regex = new Regex(@"^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$");
            if (!regex.IsMatch(from))
            {
                return new ResponseModel
                {
                    statusCode = 422,
                    message = "Invalid email address"
                };
            }
            ContactEmailModel contact = new ContactEmailModel
            {
                body = body,
                from = from,
                subject = subject
            };
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
