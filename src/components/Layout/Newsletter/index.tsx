'use client'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Reusing the contact API or creating a new one for newsletter
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: 'Newsletter',
                    lastName: 'Subscriber',
                    email: email,
                    message: 'New newsletter subscription request.'
                }),
            });

            if (response.ok) {
                toast.success('Thank you for subscribing!');
                setEmail('');
            } else {
                toast.error('Failed to subscribe.');
            }
        } catch (error) {
            console.error('Error subscribing:', error);
            toast.error('An error occurred.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-darklight py-12">
            <div className="site-container max-w-6xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="md:w-1/2" data-aos="fade-right">
                        <h2 className="text-3xl font-bold text-white mb-2">
                            Stay Updated with Marketing Trends
                        </h2>
                        <p className="text-grey text-lg">
                            Get the latest insights on Meta & Google Ads directly in your inbox. No spam, just value.
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full" data-aos="fade-left">
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                required
                                className="flex-grow px-6 py-4 rounded-lg focus:outline-none text-midnight_text"
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-primary text-darkmode px-8 py-4 rounded-lg font-bold hover:bg-primary-hover hover:shadow-[0_0_20px_rgba(255,90,31,0.35)] transition-colors disabled:opacity-50"
                            >
                                {loading ? 'Subscribing...' : 'Subscribe Now'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
