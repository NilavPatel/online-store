import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface CartItem {
    id: string;
    name: string;
    quantity: number;
    price: number;
}

@Injectable({
    providedIn: 'root'
})
export class CartStoreService {
    private readonly STORAGE_KEY = 'cart_items';
    private cartSubject = new BehaviorSubject<CartItem[]>(this.loadCart());
    cart$: Observable<CartItem[]> = this.cartSubject.asObservable();

    private loadCart(): CartItem[] {
        const data = localStorage.getItem(this.STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    }

    private saveCart(cart: CartItem[]) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cart));
    }

    getCartSnapshot(): CartItem[] {
        return this.cartSubject.getValue();
    }

    addItem(item: CartItem) {
        const cart = this.getCartSnapshot();
        const existing = cart.find(i => i.id === item.id);

        let updated: CartItem[];
        if (existing) {
            updated = cart.map(i =>
                i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
            );
        } else {
            updated = [...cart, item];
        }

        this.cartSubject.next(updated);
        this.saveCart(updated);
    }

    removeItem(id: string) {
        const updated = this.getCartSnapshot().filter(i => i.id !== id);
        this.cartSubject.next(updated);
        this.saveCart(updated);
    }

    clearCart() {
        this.cartSubject.next([]);
        localStorage.removeItem(this.STORAGE_KEY);
    }
}
