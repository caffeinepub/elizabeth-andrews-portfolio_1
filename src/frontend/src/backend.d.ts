import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Message {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export type Time = bigint;
export interface PortfolioItem {
    url: string;
    title: string;
    context: string;
    date: Time;
    category: string;
}
export interface backendInterface {
    addPortfolioItem(title: string, category: string, url: string, context: string, date: Time): Promise<void>;
    getAllMessages(adminId: Principal): Promise<Array<Message>>;
    getAllPageContent(): Promise<Array<[string, string]>>;
    getAllPortfolioItems(): Promise<Array<PortfolioItem>>;
    getPageContent(key: string): Promise<string>;
    getPortfolioByCategory(category: string): Promise<Array<PortfolioItem>>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
    updatePageContent(key: string, content: string): Promise<void>;
}
