"use client"

import { products } from "./products-data"
import { ProductCard } from "./product-card"

export function ProductsList() {
    return (
        <section className="space-y-8">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    )
}
