const Terms = () => {
    return (
        <div className="px-5 pb-12 text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                Terms & Policies – Royal Industry
            </h2>

            <p className="mb-4">
                Welcome to the Royal Industry mobile application. By accessing or using
                our services, you agree to the following Terms & Policies. Please read
                them carefully.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">1. Use of the App</h3>
            <p className="mb-4">
                The Royal Industry app is designed to provide information, pricing, and
                purchasing options for construction materials, tools, and industrial
                products. You agree to use the app in compliance with all applicable laws
                and regulations.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">2. Product Information</h3>
            <p className="mb-4">
                We make every effort to ensure product details, images, and prices are
                accurate. However, minor variations may occur due to updates, supplier
                changes, or technical limitations. Royal Industry reserves the right to
                modify or update product information at any time.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">3. Pricing & Payments</h3>
            <p className="mb-4">
                All prices displayed in the app are inclusive/exclusive of taxes as
                specified. Prices may vary based on offers, stock availability, or
                logistical factors. Payments made through the app are processed securely
                through trusted third-party gateways.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">4. Orders & Delivery</h3>
            <p className="mb-4">
                Once an order is placed, you will receive a confirmation notification.
                Delivery timelines depend on your location and product availability.
                Royal Industry is not responsible for delays caused by external
                logistics or unforeseen circumstances.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">5. Cancellations & Returns</h3>
            <p className="mb-4">
                Orders can be cancelled before dispatch. Once shipped, cancellation may
                not be possible. Returns are accepted only for damaged, defective, or
                incorrect items. Customers must provide proof such as photos or videos.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">6. Privacy & Data Protection</h3>
            <p className="mb-4">
                We value your privacy. All personal information—such as your name,
                contact details, and order data—is stored securely and used solely for
                order processing, support, and service improvement. We do not sell or
                share your data with unauthorized third parties.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">7. User Responsibilities</h3>
            <p className="mb-4">
                You agree not to misuse the app, manipulate prices, attempt unauthorized
                access, or interfere with system operations. Any misuse may result in
                account suspension or legal action.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">8. Changes to the Terms</h3>
            <p className="mb-4">
                Royal Industry may update these terms periodically. Continued use of the
                app after updates indicates acceptance of the revised terms.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">9. Contact Information</h3>
            <p className="mb-4">
                For any questions or concerns regarding our Terms & Policies, contact us
                at: <span className="font-semibold">support@royalindustry.com</span>
            </p>

            <p className="mt-6 text-sm text-gray-500">
                © {new Date().getFullYear()} Royal Industry. All rights reserved.
            </p>
        </div>
    );
};

export default Terms;
