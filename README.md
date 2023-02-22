<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/tenggaradev/hackanton-mantle-nextjs">
    <!-- <img src="./assets/img/mantle-logo.jpg" alt="Logo" width="80" height="80"> -->
  </a>

<h3 align="center"><a href="https://tenggara-hackanton-mantle.vercel.app/">Mantle Personalized Block Explorer</a></h3>

  <p align="center">
    Mantle Personalized Block Explorer is a simplified block explorer for non native crypto users.
    <br />
    <a href="https://github.com/tenggaradev/hackanton-mantle-nextjs"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- <a href="https://github.com/tenggaradev/hackanton-mantle-nextjs">View Demo</a> -->
    ·
    <a href="https://github.com/tenggaradev/hackanton-mantle-nextjs/issues">Report Bug</a>
    ·
    <a href="https://github.com/tenggaradev/hackanton-mantle-nextjs/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About The Project</a>
      <ul>
        <li><a href="#demo">Demo Video</a></li>
        <li><a href="#background">Background</a></li>
        <li><a href="#problem">Problem</a></li>
        <li><a href="#solution">Solution</a></li>
        <li><a href="#concept-details">Concept Detalis</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#learn-more">Learn More</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

### Demo 

Check out the demo vide here: [DEMO VIDEO](https://www.youtube.com/watch?v=uSY-ThuvBjw)

The web application here: [WEB APP](https://tenggara-hackanton-mantle.vercel.app/)

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->
![Product_Hero](https://user-images.githubusercontent.com/36572181/220634240-09d19d8d-fc24-47ac-892d-6b646b7de531.jpg)

> Data is just a sample for demo purposes

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Background

Crypto space has thousands of projects. Trying to tokenize almost anything. Starting from CPU power to car movements. As in any other thing in life, when you are given something then you have to store it. When you send or receive it you want to check the process it. Don’t trust, verify.

Then you open the block explorer.

In the world of cryptocurrency, a block explorer is an essential tool for users to interact with the underlying blockchain technology. It allows users to view and explore the details of individual transactions, addresses, and blocks on a blockchain network. A block explorer provides users with an interface that helps them navigate the blockchain network, search for transactions, and track the movement of cryptocurrencies.

However, navigating a block explorer can be a daunting task, especially for new users who may not be familiar with the interface. A poorly designed interface can cause confusion and frustration, leading to errors and potential loss of funds. It is essential for users to become familiar with the user interface of a block explorer to ensure that they can navigate the platform with ease and confidence.

A well-designed user interface for a block explorer can make it easier for users to access the information they need quickly and efficiently. It can help users understand the status of their transactions and ensure that they are sending and receiving the correct amount of cryptocurrency. Furthermore, it can help users identify any potential security issues or suspicious activities on the blockchain network.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Problem

As we've discussed, navigating a block explorer can be a daunting task, particularly for new cryptocurrency users. To address this issue, personalized and easy-to-understand block explorer interfaces can help users navigate the blockchain network with greater ease and confidence.

Moreover, an easy-to-understand block explorer interface can provide users with a user-friendly and intuitive experience. This type of interface typically includes visual aids, easy-to-navigate menus, and interactive charts to help users understand complex information easily. By making the interface more accessible, users can understand the status of their transactions, track their cryptocurrency movements, and identify any potential risks.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Solution

By creating a block explorer that is easier to read and understand, Our design aims to help users navigate the blockchain network more efficiently and confidently.

One way to make the interface easier to read is to use clear and concise language in the interface's text. This approach can help reduce the complexity of the information presented, making it easier for users to understand the status of their transactions and the movement of their cryptocurrency.

Another way to enhance the user experience is by using visual aids such as interactive charts and diagrams. These visual aids can help users better understand the data presented on the interface, as well as identify any potential security issues or suspicious activities on the blockchain network.

In addition, we could consider incorporating educational resources into the block explorer to help users better understand the blockchain network and how to use the interface. This approach can help reduce confusion and frustration for new users and make it easier for them to navigate the platform.

Overall, creating a block explorer that is easier to read and understand is an essential step in improving the user experience and increasing the accessibility of blockchain technology. By doing so, we can help users feel more confident in their use of cryptocurrency and blockchain networks.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Concept Details

A simple explanation about our concept is filtered information and additional information on the user's screen when they connect their address to the block explorer.

In the widely used block explorer a user has to paste their address in the search box to get their address transactions. And then they are facing some information that they need to understand or familiarize with. Our design concept is trying to simplify and reorganize that information into something that is easy to understand and familiar with just like a bank statement. 

At the top section we simplify the information by only showing the address, balance and tokens drop down. At desktop mode the QR code for the address is shown automatically to reduce the step if the user wants to send using QR.

The middle section is graphical information history of the balance amount.

At the bottom section is where the transaction information is with tabs based on the type or category of the transaction. 

Based on our experience the information we need when we are opening our account transaction or statement which is BALANCE (which shows at the top and middle section), WHEN, FROM, TO, WHAT and AMOUNT.

#### 1. When
The information displayed based on the transaction timestamp in the form of date and time rather than X times ago to avoid something like “When was it exactly 34 days and 22 hours ago?”

#### 2. From 
No changes from the existing data unless the user adds the address into the contact address.

#### 3. To
No changes from the existing data unless the user adds the address into the contact address.

#### 4. What
Labeling the transaction with additional detail and giving tabs to filter the transaction based on the type and layer where it occurs.

#### 5. Amount
The amount of that transaction. 

We removed other advanced information like block number and transaction fee from the main transaction interface. If the user needs to know more details then they can click on the TxHash of the transaction.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Usage

First, users just need to connect their wallets. 

![Product_Hero](https://user-images.githubusercontent.com/36572181/220713479-868244e4-1ad6-497c-895e-b4b143d88d4d.jpg)

User can also see their assets price movement.

![Screenshot_511](https://user-images.githubusercontent.com/36572181/220713676-4c9da4f4-8efe-4e2e-89e8-884712835d97.jpg)

And, one of our focus, the UI/UX in the transactions data. The picture belows shows  **Transfer Tab**. In this tab, users can see all their transactions in layer 2 and *deposit from* and *withdrawal to* layer 1.

![Screenshot_512](https://user-images.githubusercontent.com/36572181/220714050-0b5ab687-8aff-4174-8c8a-7bd6f7a16469.jpg)

There is also a tab for Deposit from layer 1. This tab will filter deposit only transactions.

![Screenshot_514](https://user-images.githubusercontent.com/36572181/220718105-0d52708c-f8bf-4541-b340-4226b0125a7e.jpg)

Lastly, there is a Withdrawal to layer 1 tab. This tab filters all withdrawal. If the users haven't claimed their withdrawls, the button will take them to the Claim web page.

![Screenshot_515](https://user-images.githubusercontent.com/36572181/220718539-57b1f727-a97e-47ff-9050-a387b7b13312.jpg)

## Challenges

We understand that we can pull real data from Mantle Layer 2. As you can see, we create MantleServices.js inside lib folder. This service helps us to interact with with Mantle Layer 2. With this service, we query real data for Deposit and Withdrawal. But to make sure, our web app showcase demonstrate all the data needed, we use the sample data in our demo app.


<!-- ROADMAP -->
## Roadmap

- [ ] Address Labelling - We know that many fall for victims because of the address labelling issue, where users miss transfer, or even some scammers mimic an address that related to the users. With labelling address, this could enhance user security and easy to transfer.

- [ ] Filter Transactions - Where users can filter their transactions based on the property they chose.

- [ ] Let us know more features needed


See the [open issues](https://github.com/tenggaradev/hackanton-mantle-nextjs/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Tenggara: [Contact Us Here](https://tenggara-website.vercel.app/#contact)

Project Link: [https://github.com/tenggaradev/hackanton-mantle-nextjs](https://github.com/tenggaradev/hackanton-mantle-nextjs)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/yusakman/moirai-aggregator.svg?style=for-the-badge
[contributors-url]: https://github.com/tenggaradev/hackanton-mantle-nextjs/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/yusakman/moirai-aggregator.svg?style=for-the-badge
[forks-url]: https://github.com/tenggaradev/hackanton-mantle-nextjs/network/members
[stars-shield]: https://img.shields.io/github/stars/yusakman/moirai-aggregator.svg?style=for-the-badge
[stars-url]: https://github.com/tenggaradev/hackanton-mantle-nextjs/stargazers
[issues-shield]: https://img.shields.io/github/issues/yusakman/moirai-aggregator.svg?style=for-the-badge
[issues-url]: https://github.com/tenggaradev/hackanton-mantle-nextjs/issues
[license-shield]: https://img.shields.io/github/license/yusakman/moirai-aggregator.svg?style=for-the-badge
[license-url]: https://github.com/tenggaradev/hackanton-mantle-nextjs/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/company/tenggaradev/
[product-screenshot]: assets/product/Product_Hero.jpg

