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
                we = "My",
                skills = "umiejêtnoœci",
                projects = "projekty",
                offer = "oferta",
                contact = "Kontakt",
                development = "Rozwój",
                managment = "Zarz¹dzanie",
                cloud_solutions = "Rozwi¹zania chmurowe",
                user_interfaces = "interfejsy u¿ytkownika",
                Nice_to_meet_you = "Mi³o ciê poznaæ!",
                Hi_we_are_Adrian_and_Jakub = "Czeœæ, jesteœmy Adrian i Kuba",
                scroll_down = "PrzejdŸ ni¿ej",
                knowledge_Skills = "Wiedza i umiejêtnoœci",
                cloud_logical = "Clound solutions and <br /> Logical part of website",
                designer_development = "User interface designer and <br /> front-end developer",
                showcase = "show-<br>case",
                Top_notch_quality = "Najwy¿sza jakoœæ",
                speed_turn_around = "Szybka realizacja",
                email_Availability = "Dostêpny kontakt mail'owy",
                affordable = "Przystêpna cena",
                agree_or_disagree_to_any_of_the_above = "Zgadzasz siê z powy¿szym?",
                contact_us = "Z kontaktuj siê z nami",
                email = "e-mail",
                title = "Tytu³",
                message = "Wiadomoœæ",
                why_we = "Te powody „dlaczego my” powinny wystarczyæ, aby przekonaæ kogoœ, kto szuka odpowiedniej osoby do stron internetowych.",
                submit = "Wyœlij",
                developer = "dewelope<br>rzy"

            };
            TranslationModel translationEN = new TranslationModel
            {
                countryCode = "PL",
                we = "My",
                skills = "umiejêtnoœci",
                projects = "projekty",
                offer = "oferta",
                contact = "Kontakt",
                development = "Rozwój",
                managment = "Zarz¹dzanie",
                cloud_solutions = "Rozwi¹zania chmurowe",
                user_interfaces = "interfejsy u¿ytkownika",
                Nice_to_meet_you = "Mi³o ciê poznaæ!",
                Hi_we_are_Adrian_and_Jakub = "Czeœæ, jesteœmy Adrian i Kuba",
                scroll_down = "PrzejdŸ ni¿ej",
                knowledge_Skills = "Wiedza i umiejêtnoœci",
                cloud_logical = "Clound solutions and <br /> Logical part of website",
                designer_development = "User interface designer and <br /> front-end developer",
                showcase = "show-<br>case",
                Top_notch_quality = "Najwy¿sza jakoœæ",
                speed_turn_around = "Szybka realizacja",
                email_Availability = "Dostêpny kontakt mail'owy",
                affordable = "Przystêpna cena",
                agree_or_disagree_to_any_of_the_above = "Zgadzasz siê z powy¿szym?",
                contact_us = "Z kontaktuj siê z nami",
                email = "e-mail",
                title = "Tytu³",
                message = "Wiadomoœæ",
                why_we = "Te powody „dlaczego my” powinny wystarczyæ, aby przekonaæ kogoœ, kto szuka odpowiedniej osoby do stron internetowych.",
                submit = "Wyœlij",
                developer = "dewelope<br>rzy"
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
