
export default function Home() {
    return (
        <>

            <main className="home-page">
                {/* HERO SECTION */}
                <section className="hero">
                    <div className="hero-content">
                        <h1>Shop Smart, Shop Fast</h1>
                        <p>
                            Discover quality products at the best prices.
                            Fast delivery. Easy returns.
                        </p>
                        <button className="hero-btn">Shop Now</button>
                    </div>
                </section>

                {/* FEATURE SECTION */}
                <section className="features">
                    <div className="feature-card">
                        <h3>🚚 Fast Delivery</h3>
                        <p>Get products delivered to your doorstep quickly.</p>
                    </div>

                    <div className="feature-card">
                        <h3>💳 Secure Payments</h3>
                        <p>Your payments are safe with us.</p>
                    </div>

                    <div className="feature-card">
                        <h3>↩ Easy Returns</h3>
                        <p>Hassle-free 30-day return policy.</p>
                    </div>
                </section>

                {/* PLACEHOLDER FOR PRODUCTS */}
                <section className="home-products">
                    <h2>Featured Products</h2>
                    <p className="muted">
                        Browse our top-selling products curated for you.
                    </p>
                </section>
            </main>
        </>
    )
}
