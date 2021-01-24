using System;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using SendGrid.Helpers.Mail;
using Microsoft.Extensions.Logging;
using CV.Functions.Models;

namespace CV.Functions
{
    public static class SendEmailQueueProcessing
    {
        [FunctionName("SendEmailQueueProcessing")]
        [return: SendGrid(ApiKey = "SendGridApikey", To = "devduomail@gmail.com", From = "no-reply@flashly.pro")]
        public static SendGridMessage Run([QueueTrigger("emailqueue", Connection = "AzureWebJobsStorage")]ContactEmailModel email, ILogger log)
        {
            SendGridMessage message = new SendGridMessage()
            {
                Subject = email.subject,
                ReplyTo = new EmailAddress(email.from)
            };
            message.AddContent("text/plain", email.body + $" FROM: {email.from}");
            return message;
        }
    }
}
