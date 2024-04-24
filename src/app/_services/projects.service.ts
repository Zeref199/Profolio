import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, 
      name: 'Java Spring Boot E-Commerce Website', 
      summary: `This project involves developing a complete e-commerce website using Java, Spring Boot, Thymeleaf, Bootstrap, jQuery, and MySQL database.
                It includes an admin application for managing users, categories, brands, products, customers, orders, and sales reports, as well as a shopping application that allows customers to browse products and place orders.`,
      description: `
      <p>Complete e-commerce website using Java, Spring Boot, Thymeleaf, Bootstrap, jQuery, and MySQL database. The website consists of two main parts:</p>

      <p>Admin Application(Shopoumi-Admin): This application is used for managing users, categories, brands, products, customers, orders, and sales reports. It provides an interface for administrators to control and monitor the activities on the website.</p>
      <p>Shopping Application(Shopoumi-Frontend): This application allows customers to browse products and place orders. It includes shopping cart features and supports payment via PayPal and credit cards.</p>
      <p>The project also involves the use of various technologies and frameworks such as:</p>
      <ul>
      <li><strong>Spring Data JPA with Hibernate:</strong> Used for the data access layer.</li>
      <li><strong>Spring Security:</strong> Used for authentication and role-based authorization.</li>
      <li><strong>Thymeleaf:</strong> A template engine used for creating dynamic view pages.</li>
      <li><strong>Bootstrap and jQuery:</strong> Used for creating responsive, mobile-friendly web pages.</li>
      <li><strong>Spring RESTful Webservices:</strong> Used in conjunction with jQuery on the client side.</li>
      <li><strong>PayPal Checkout API:</strong> Used for payment integration.</li>
      <li><strong>JUnit, Spring Test, AssertJ, and Mockito:</strong> Used for unit tests and integration tests.</li>
      <li><strong>Heroku cloud platform and Amazon S3:</strong> Used for deploying the application and file upload respectively.</li>
      <li><strong>Google Chart:</strong> Used for drawing charts in sales reports.</li>
      <li><strong>Spring OAuth:</strong> Used for single sign-on with Facebook and Google.</li>
      <li><strong>Spring Mail:</strong> Used for sending emails for customer registration and order confirmation.</li>
      </ul>
      <p>Please visit the <b>Shopmi-Admin</b> and <b>Shopmi-Frontend</b> projects for more details(demo links included)</p>
  
      `,
      projectLink: 'https://github.com/Zeref199/E-CommerceApp.git',
      demoLink: '',
      videoLink: '',
      tags: [Tag.SPRINGBOOT, Tag.THYMELEAF, Tag.TYPESCRIPT, Tag.JAVA],
      pictures: ["https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project2/1.PNG", "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project1/1.PNG"]
      },
      {id: 1, 
        name: 'Shopmi-Admin', 
        summary: 'Admin dashboard for the Java Spring Boot E-Commerce Website',
        description: `<p>The shopmi-Admin app has 5 roles : Admin, SalesPerson, Editor, Shipper and Assistant You can find the access right table above.</p>
                      <p>It provides an interface for administrators to control and monitor the activities on the website.</p>

                      <h5>Key functionalities of the Shopme Admin include</h5>

                    <ul>
                    <li>User Management: Administrators can manage user accounts, including creating, updating, and deleting users.</li>
                    <li>Category Management: Administrators can manage product categories, allowing them to organize products in a structured manner.</li>
                    <li>Brand Management: Administrators can manage brands, which can be associated with the products.</li>
                    <li>Product Management: Administrators can manage the products being sold on the website. This includes adding new products, updating existing products, and removing products.</li>
                    <li>Customer Management: Administrators can view and manage customer information.</li>
                    <li>Order Management: Administrators can view and manage orders placed by customers. This includes viewing order details and updating order status.</li>
                    <li>Sales Report: Administrators can view sales reports, providing insights into the performance of the e-commerce website.</li>
                    <li>Articles Management: Administrators can manage Articles</li>
                    <li>Settings: Administrators can manage the settings of the  shopme-frontend</li>
                    </ul>
                    <p>to register as an admin pls use this email: admin@gmail.com</p>
                    <p>and this password admin123</p>`,
        projectLink: 'https://github.com/Zeref199/E-CommerceApp.git',
        demoLink: 'https://shopoumi-admin-cdf4af5d51c0.herokuapp.com/',
        videoLink: '',
        tags: [Tag.SPRINGBOOT, Tag.THYMELEAF, Tag.TYPESCRIPT, Tag.JAVA],
        pictures: ["https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project1/Access Rights Table.png", "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project1/1.PNG", "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project1/2.PNG", "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project1/3.PNG", 
        "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project1/4.PNG", "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project1/5.PNG", "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project1/6.PNG", "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project1/7.PNG", "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project1/8.PNG", 
        "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project1/9.PNG", "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project1/10.PNG", "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project1/11.PNG", "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project1/12.PNG", "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project1/13.PNG", 
        ]

        },
        {id: 2, 
          name: 'Shopmi-Frontend', 
          summary: 'Front-end App for the Java Spring Boot E-Commerce Website',
          description: `<p>The Shopme Frontend is a part of the Java Spring Boot E-Commerce Ultimate Course project. It's an application designed for customers to browse products and place orders</p> 
                        <p>It provides an interface for customers to interact with the e-commerce website.</p>
                        <h5>Key functionalities of the Shopme Frontend include:</h5>

                      <ul>
                      <li>Product Browsing: Customers can browse through the various products available on the website. They can view product details, including descriptions, images, prices, and reviews.</li>
                      <li>Shopping Cart: Customers can add products to their shopping cart. The shopping cart keeps track of the products selected by the customer for purchase.</li>
                      <li>Order Placement: Customers can place orders for the products in their shopping cart. They can specify shipping details and make payments.</li>
                      <li>Payment Integration: The application supports payment via PayPal and credit cards.</li>
                      <li>Customer Registration: New customers can register on the website. Registered customers can log in to view and manage their orders.</li>
                      </ul>
                        `,
          projectLink: 'https://github.com/Zeref199/E-CommerceApp.git',
          demoLink: 'https://shopoumi-frontend-e79109250729.herokuapp.com/',
          videoLink: '',
          tags: [Tag.SPRINGBOOT, Tag.THYMELEAF, Tag.TYPESCRIPT, Tag.JAVA],
          pictures: ["https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project2/1.PNG", "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project2/2.PNG", "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project2/3.PNG", 
          "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project2/4.PNG", "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project2/5.PNG", "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project2/6.PNG", "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project2/7.PNG", "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project2/8.PNG", 
          "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project2/9.PNG", "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project2/10.PNG", "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project2/11.PNG"]
          },
    {id: 3, 
    name: 'FullStack E-Commerce WebSite', 
    summary: 'Ecommerce App with Angular in the front-end and spring Boot in the back-end with full CRUD support',
    description: `
    <p>
      This project showcases a full-featured e-commerce web application.
      The application presents a seamless shopping experience, allowing users to browse products, add items to their cart, and complete purchases with secure credit card processing.
    </p>
    <p>
      Front-End Development: <br/>
      Utilized Angular to create a dynamic and responsive user interface. <br/>
      Implemented a clean and modern design that enhances user engagement.<br/>
      Integrated Stripe for secure and efficient payment transactions.
    </p>
    <p>
      Back-End Development:<br/>
      Developed a robust back-end using Java Spring Boot.<br/>
      Ensured secure user authentication and authorization with JWT, OAuth2, and OpenID Connect.<br/>
      Configured SSL/TLS for secure data transmission.
    </p>`,
    projectLink: 'https://github.com/Zeref199/E-CommerceApp.git',
    demoLink: '',
    videoLink: 'https://www.youtube.com/watch?v=NKlYi5nMg7s',
    tags: [Tag.ANGULAR, Tag.SPRINGBOOT, Tag.TYPESCRIPT, Tag.JAVA],
    pictures: ["https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project3/1.PNG","https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project3/2.PNG", "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project3/3.PNG", "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project3/4.PNG",
              "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project3/5.PNG","https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project3/6.PNG", "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project3/7.PNG", "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project3/8.PNG",
              "https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project3/9.PNG"
    ]
    },
    
      
    {id: 4, 
      name: 'Slash_RPG_Game', 
      summary: 'An open world open Style rpg game made with Unreal Engine',
      description: `<p>Action-RPG Open World Game is a testament to the power of Unreal Engine 5 and C++ programming.</p> 
                    <p>This project, showcases a variety of skills and techniques in game development.</p>
                    <p>The game features a third-person character navigating through an open-world environment, engaging in combat with various enemies using melee weapons. </p>
                    <p>The project also highlights the use of Unreal Engine 5's Open World system and the creation of realistic scenes with Quixel Megascans. </p>
                    <p>The game's sound design leverages Unreal Engine 5's new MetaSounds system, providing high-quality sounds that enhance the gaming experience. </p>
                    <p>This project demonstrates a strong understanding of data structures, algorithms, and best coding practices for game development in Unreal Engine 5.</p>`,
      projectLink: 'https://github.com/Zeref199/E-CommerceApp.git',
      demoLink: '',
      videoLink: '',
      tags: [Tag.CPLUSPLUS, Tag.UNREAL],
      pictures: ["https://shopoume.s3.eu-north-1.amazonaws.com/Profolio/project4/1.png"]
      }
  ];

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number) : Project{
    let project = this.projects.find(project => project.id === id);

    if(project === undefined){
      throw new TypeError('There is no project that matches the id: ' + id);
    }

    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];

    this.projects.forEach(function(project){
      let foundAll = true;

      filterTags.forEach(function(filterTag){
        if(project.tags.includes(filterTag) == false){
          foundAll = false;
        }
      });

      if(foundAll){
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }


}
