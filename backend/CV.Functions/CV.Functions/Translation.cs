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
using System.Collections.Generic;
using System.Linq;

namespace CV.Functions
{
    public static class Translation
    {
        [FunctionName("Translation")]
        public static async Task<ResponseModel> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "Translation/{lang?}")] HttpRequest req, string lang,
            ILogger log)
        {
            TranslationModel translationPL = new TranslationModel
            {
                countryCode = "EN",
                we = "We",
                skills = "skills",
                projects = "projects",
                offer = "Oferta",
                contact = "contact",
                development = "development",
                managment = "managment",
                cloud_solutions = "cloud solutions",
                user_interfaces = "user interfaces",
                Nice_to_meet_you = "Nice to meet you!",
                Hi_we_are_Adrian_and_Jakub = "Hi we are Adrian and Jakub",
                scroll_down = "scroll down",
                knowledge_Skills = "knowledge & Skills",
                cloud_logical = "Clound solutions and <br /> Logical part of website",
                designer_development = "User interface designer and <br /> front-end developer",
                showcase = "show-<br>case",
                Top_notch_quality = "Top notch quality",
                speed_turn_around = "Speedy turn around",
                email_Availability = "Always ready to chat",
                affordable = "Affordable",
                agree_or_disagree_to_any_of_the_above = "agree or disagree to any of the above",
                contact_us = "contact us",
                email = "email",
                title = "title",
                message = "message",
                why_we = "These “why we” reasons should be enough to convince someone who is looking for websites solution.",
                submit = "submit",
                developer = "develo-<br>pers"

            };
            TranslationModel translationEN = new TranslationModel
            {
                countryCode = "PL",
                we = "My",
                skills = "umiej�tno�ci",
                projects = "projekty",
                offer = "oferta",
                contact = "Kontakt",
                development = "Rozw�j",
                managment = "Zarz�dzanie",
                cloud_solutions = "Rozwi�zania chmurowe",
                user_interfaces = "interfejsy u�ytkownika",
                Nice_to_meet_you = "Mi�o ci� pozna�!",
                Hi_we_are_Adrian_and_Jakub = "Cze��, jeste�my Adrian i Kuba",
                scroll_down = "Przejd� ni�ej",
                knowledge_Skills = "Wiedza i umiej�tno�ci",
                cloud_logical = "Rozwiązania chmurowe oraz <br /> logiczna część stron",
                designer_development = "Projektant interfejsów użytkownika and <br /> programista frontendowy",
                showcase = "show-<br>case",
                Top_notch_quality = "Najwy�sza jako��",
                speed_turn_around = "Szybka realizacja",
                email_Availability = "Dost�pny kontakt mail'owy",
                affordable = "Przyst�pna cena",
                agree_or_disagree_to_any_of_the_above = "Zgadzasz si� z powy�szym?",
                contact_us = "Z kontaktuj si� z nami",
                email = "e-mail",
                title = "Tytu�",
                message = "Wiadomo��",
                why_we = "Te powody �dlaczego my� powinny wystarczy�, aby przekona� kogo�, kto szuka odpowiedniej osoby do stron internetowych.",
                submit = "Wy�lij",
                developer = "dewelo-<br>perzy"
            };

            List<TranslationModel> translationModels = new List<TranslationModel>()
                {
                    translationEN,
                    translationPL
                };

            if (translationModels.Count(x => x.countryCode == lang) == 1)
            {
                return new ResponseModel
                {
                    message = "OK",
                    statusCode = 200,
                    value = translationModels.Where(x => x.countryCode == lang)
                };
            }

            return new ResponseModel
            {
                message = "OK",
                statusCode = 200,
                value = translationModels
            };
        }
    }
}
