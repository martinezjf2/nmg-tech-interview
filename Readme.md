# Bob’s Appliances Website

## Overview

This project is a fully responsive appliance dealer website built with **Bootstrap 3.3.7**. It includes various pages and features designed to provide a seamless user experience while showcasing products and services efficiently.

## Features Implemented

### 1. **Responsive Design**

- Utilizes **Bootstrap’s grid system** to ensure all pages are **mobile-friendly** and work across different screen sizes.
- **Meta viewport tag**: `<meta name="viewport" content="width=device-width, initial-scale=1.0">` to maintain responsiveness.

### 2. **Navigation**

- A **fixed-top navbar** that includes:
  - Links to key pages (Home, About, Financing, Contact Us)
  - A **cart icon** for easy access to purchases.

### 3. **Hero Section (Carousel)**

- A **Bootstrap 3 carousel** featuring high-quality appliance images.
- Automatically rotates images every few seconds.
- **Overlay with a CTA button** for user engagement.

### 4. **Featured Brands Section**

- Displays **logos of key brands** using a **Bootstrap grid**.
- Fully responsive and organized.

### 5. **Financing Page with Fixed Background**

- A **parallax scrolling effect** achieved using:
  ```css
  background-attachment: fixed;
  ```
- Semi-transparent **overlay** to enhance text visibility.

### 6. **Contact Page with Google Maps & Email.js Integration**

- Includes a **contact form** with fields for **name, email, and message**.
- Integrated **Email.js** to send form submissions directly to an email address.
- Embedded **Google Maps** displaying the store location.

### 7. **Email Marketing Integration with Klaviyo**

- Integrated **Klaviyo** for email marketing and subscriber management.
- Implemented an **email signup popup** for collecting leads.
- A teaser remains in the **bottom-right corner** after dismissal.

### 8. **Deployment on GitHub Pages**

- The project is **hosted on GitHub Pages**, allowing easy access and sharing.
- Uses **custom domain settings** for a professional online presence.

### 9. **Footer Section**

- Includes **quick links** to important pages.
- Styled to match the theme of the website.

### 10. **Image Styling**

- Custom **shadow effect** added to images:
  ```css
  .img-shadow {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
  }
  ```

## Troubleshooting

### **JavaScript Not Working for Bootstrap Elements**

#### Issue:

- Some Bootstrap elements like the **carousel** and **dropdowns** were **not working** initially.

#### Solution:

1. **Ensure Bootstrap’s JavaScript and jQuery are included** in the correct order:

   ```html
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   ```
2. **Scripts should be placed at the bottom** of the `<body>` to ensure they load after the HTML.
3. **Use `defer` for scripts in the `<head>` section** if necessary:

   ```html
   <script src="script.js" defer></script>
   ```

   This allows the **HTML to load first** before JavaScript executes, preventing issues with uninitialized Bootstrap elements.

## Areas for Growth

### **1. PHP Includes for Reusable Components**

- Currently, the navbar and footer are repeated across multiple pages.
- By using **PHP includes**, we can eliminate code redundancy:
  ```php
  <?php include 'navbar.php'; ?>
  ```
- This makes maintenance easier and ensures consistency across all pages.

### **2. Expanding the Product Catalog**

- Implement a **product catalog** with filtering options.
- Use **AJAX for dynamic loading** of products without refreshing the page.

### **3. Enhancing Klaviyo Integration**

- Automate personalized email campaigns based on user interactions.
- Implement **segmentation** for targeted promotions.

### **4. Upgrading to Bootstrap 5**

- The site currently uses Bootstrap 3.3.7.
- Upgrading to **Bootstrap 5** would provide better responsiveness and modern components.

### **5. Optimizing Performance**

- Reduce **HTTP requests** by minifying CSS and JavaScript files.
- Implement **lazy loading** for images to improve page speed.

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/bobs-appliances.git
   ```
2. Open `index.html` in a browser.
3. Ensure you have an internet connection for Bootstrap’s **CDN resources** to load properly.

## Future Enhancements

- Upgrade Bootstrap to **Bootstrap 5** for improved performance and features.
- Implement **AJAX form submission** for the contact page.
- Add a **product catalog with filtering options**.
- Improve **Klaviyo email automation** to send targeted offers based on user behavior.

## Deployment

* This project was deployed on Github Pages. You can view the project clicking on thie link:[ https://martinezjf2.github.io/nmg-tech-interview/index.html](https://martinezjf2.github.io/nmg-tech-interview/index.html)

---

This README serves as a guide to understanding the **features, troubleshooting, and setup instructions** for Bob’s Appliances website. 🚀
