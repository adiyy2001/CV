using System;
using System.Collections.Generic;
using System.Text;

namespace CV.Functions.Models
{
    public class ResponseModel
    {
        public int statusCode { get; set; }
        public string message { get; set; }
        public object value { get; set; }
    }
}
