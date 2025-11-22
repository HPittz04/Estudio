import type { Metadata } from "next";
import { Suspense } from "react";
import PaymentConfirmation from "./PaymentConfirmation";

export const metadata: Metadata = {
  title: "Confirmação de pagamento",
  description: "Verifica o estado do checkout Stripe do Social Club.",
};

export default function ConfirmPage() {
  return (
    <section className="bg-texture py-24">
      <div className="mx-auto max-w-3xl">
        <Suspense fallback={<div className="text-center text-slate-200">A carregar pagamento...</div>}>
          <PaymentConfirmation />
        </Suspense>
      </div>
    </section>
  );
}
