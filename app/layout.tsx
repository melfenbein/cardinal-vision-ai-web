import React from "react";

export const metadata = {
  title: "Cardinal Vision AI",
  description: "The decision layer for collectibles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
