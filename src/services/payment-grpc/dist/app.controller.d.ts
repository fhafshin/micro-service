interface NewPaymentRequest {
    customerId: number;
    amount: number;
}
interface PaymentRes {
    id: number;
}
export declare class AppController {
    createPayment(data: NewPaymentRequest): PaymentRes;
}
export {};
