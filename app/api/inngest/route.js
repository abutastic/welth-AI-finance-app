import { inngest } from "@/lib/inngest/client";
import { checkBudgetAlerts } from "@/lib/inngest/functions";
import { serve } from "inngest/next";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [checkBudgetAlerts],
});

// import { serve } from "inngest/next";

// import { inngest } from "@/lib/inngest/client";
// import {
//   checkBudgetAlerts,
//   generateMonthlyReports,
//   processRecurringTransaction,
//   triggerRecurringTransactions,
// } from "@/lib/inngest/function";

// export const { GET, POST, PUT } = serve({
//   client: inngest,
//   functions: [
//     processRecurringTransaction,
//     triggerRecurringTransactions,
//     generateMonthlyReports,
//     checkBudgetAlerts,
//   ],
// });
