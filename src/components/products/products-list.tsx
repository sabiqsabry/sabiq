"use client"

import { useEffect } from "react"
import { products } from "./products-data"
import { ProductCard } from "./product-card"

export function ProductsList() {
    // The browser's own jump to #product-id fires before the cards have laid
    // out, so re-apply it once they have. scroll-mt-28 clears the fixed header.
    useEffect(() => {
        const id = window.location.hash.replace("#", "")
        if (!id) return

        requestAnimationFrame(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
        })
    }, [])

    return (
        <section className="space-y-8">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    )
}
