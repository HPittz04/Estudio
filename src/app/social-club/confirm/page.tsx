import type { Metadata } from "next";
import PaymentConfirmation from "./PaymentConfirmation";

export const metadata: Metadata = {
  title: "Confirmação de pagamento",
  description: "Verifica o estado do checkout Stripe do Social Club.",
};

export default function ConfirmPage() {
  return (
    <section className="bg-texture py-24">
      <div className="mx-auto max-w-3xl">
        <PaymentConfirmation />
      </div>
    </section>
  );
}
