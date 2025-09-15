# BSB Travel Concepts Website

This is a professional business website built with [Next.js](https://nextjs.org), featuring information and contact.

## Features

- **Modern UI:** Responsive design using Tailwind CSS and custom fonts.
- **Business Info:** Details for multiple businesses, including address, contact, and services.
- **Contact Form:** Users can send messages directly to the business email via EmailJS integration.
- **Embedded Maps:** Google Maps for business locations.
- **Social Links:** Quick access to business social media.
- **Accessible Navigation:** Fixed navbar and smooth section scrolling.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/onlinedynamics25/bsbtravels.git
   cd segunotolorin
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory and add your EmailJS credentials:

   `NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key`

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

- `/src/app` - Next.js app directory (pages, layout, etc.)
- `/src/components` - Reusable React components (Navbar, Footer, Input, TextArea, Button, NotificationModal, etc.)
- `/public/fonts` - Custom font files
- `/styles` - Global and component styles

## Deployment

The recommended way to deploy this project is via [Vercel](https://vercel.com/):

- Push your repository to GitHub.
- Import your project into Vercel and set the environment variables.
- Vercel will handle builds and deployments automatically.

## Contributing

If you wish to continue or improve this project:

- Fork the repository.
- Create a new branch for your feature or fix.
- Submit a pull request with a clear description of your changes.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or business inquiries, please use the contact form on the website or email [otolorinsegun9@gmail.com](mailto:otolorinsegun9@gmail.com).
