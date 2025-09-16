import './index.css';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head />
      <body className="bg-gray-100 min-h-screen font-sans">{children}</body>
    </html>
  );
}
