export const API_URL = {
  SystemLabel: {
    systemLabel: (languageId) =>
      `/SystemLabel/GetSystemLabelByLanguageId?languageId=${languageId}`,
  },

  // Mirrors ApiUrl.Account in prodoo-reactjs's src/api/apiUrls.js.
  Account: {
    login: "Account/Login",
    register: "Account/Register",
    checkDuplicateUser: (email) =>
      `Account/CheckDuplicateUser/?email=${encodeURIComponent(email)}`,
    forgotPassword: (email) =>
      `Account/SendEmail?email=${encodeURIComponent(email)}`,
    getEmailConfirmationToken: (email) =>
      `Account/GetEmailConfirmationToken?email=${encodeURIComponent(email)}`,
  },

  // Mirrors ApiUrl.LandingPage.AllLocations / ApiUrl.ResumeEdit.{SkillsLookup,RolesLookup}.
  Lookup: {
    countries: "Country/AllLocationsLookup",
    skills: (filter) => `Skills/SkillsLookup?filter=${encodeURIComponent(filter)}`,
    roles: (filter) => `Profiles/ProfileLookup?filter=${encodeURIComponent(filter)}`,
  },
};
