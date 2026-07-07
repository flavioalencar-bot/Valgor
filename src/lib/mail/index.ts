export { getMailConfig, isMailConfigured } from "./config";
export { sendMail, sendMailAsync } from "./send";
export {
  notifyTeamContactMessage,
  notifyTeamContactMessageAsync,
  sendContactConfirmation,
  notifyTeamNewDiagnostic,
  notifyTeamNewDiagnosticAsync,
  sendDiagnosticReportEmail,
  sendDiagnosticReportEmailAsync,
} from "./templates";

export type { ContactMessagePayload, DiagnosticLeadPayload, DiagnosticReportPayload } from "./templates";
