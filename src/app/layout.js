import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DeviceProvider } from '@/context/DeviceContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  adjustFontFallback: false
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  adjustFontFallback: false
});

export const metadata = {
  title: {
    template: '%s • AlGOKIDS',
    default: 'Algorithms for kids • AlGOKIDS',
  },
  description: 'Learn algorithms through interactive visualizations',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans">
        <DeviceProvider>
          {children}
        </DeviceProvider>
      </body>
    </html>
  );
}
