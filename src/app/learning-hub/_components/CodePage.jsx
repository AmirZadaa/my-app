import React from "react";

export default function CodePage() {
  return (
    <div className="border-2 border-black p-1">
      <h1 className="text-2xl font-bord text-center">Code</h1>
      <p>
        <code>
          // JavaScript is a versatile, high-level language used for web development.
          // It allows for the creation of dynamic and interactive webpages.
          // Example of JavaScript logging
            console.log("Hello, JavaScript!");
            console.warn("This is a warning!");
            console.error("This is an error!");
            // Declaring variables
            let name = "Alice";
            let age = 25;
            console.log("User:", name, "Age:", age);
            // Basic math
            console.log("Sum of 5 + 3:", 5 + 3);
            console.log("Product of 10 * 5:", 10 * 5);
        </code>
      </p>
    </div>
  );
}
