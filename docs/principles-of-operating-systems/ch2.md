---
sidebar_position: 3
description: "Where we learn about operating and computer systems, what they do, their architecture, security and more"
---

# Chapter 2: Operating system structures

## Objectives of this chapter
- What services does an operating system provide?
- How are system calls used to provide operating system services?
- Compare and contrast monolithic, latered, microkernel, modular, and hybrid strategies for designing operating systems
- Describe/illustrate the process for booting an operating system
- What tools are used to monitoring operating system performance?
- How are monitoring tools used to monitor operating system performance?
- How do you design and implement kernel modules for interacting with a Linux kernel?

## Chapter 2.1: Operating system services

![](./assets/f2.1.1.png)

<details>
    <summary>What are the 6 functions/capabilities that an operating system provides that are helpful to the user?</summary>
    <ul>
        <li>A user interface</li>
        <li>Ability to execute a program</li>
        <li>Ability to perform I/O operations</li>
        <li>Ability to manipulate the file system</li>
        <li>Ability to communicate with other processes via a network</li>
        <li>Ability to detect errors</li>
    </ul>
</details>

<details>
    <summary>What are the 3 functions/capabilities that an operating system provides that ensure efficient operation of the system?</summary>
    <ul>
        <li>Resource allocation</li>
        <li>Logging</li>
        <li>Protection and security</li>
    </ul>
</details>

![](./assets/sg2.1.png)

## Chapter 2.2: User and operating-system interface

![](./assets/sg2.2.png)

## Chapter 2.3: System calls

![](./assets/f2.3.1.png)

<details>
    <summary>What do system calls provide?</summary>
    <div>They provide an interface to the services made available by the operating system</div>
</details>

![](./assets/pa2.3.2.png)

![](./assets/f2.3.2.png)

<details>
    <summary>What are the 6 types of system calls?</summary>
    <ul>
        <li>Process control</li>
        <li>File management</li>
        <li>Device management</li>
        <li>Informationn maintenance</li>
        <li>Communications</li>
        <li>Protection</li>
    </ul>
</details>

![](./assets/f2.3.3.png)

![](./assets/standard-c-library.png)

![](./assets/sg2.3.png)

## Chapter 2.4: System services

<details>
    <summary>What are the 7 categories of system services/utilities?</summary>
    <ul>
        <li>File management</li>
        <li>Status information</li>
        <li>File modification</li>
        <li>Programming language support</li>
        <li>Program loading and execution</li>
        <li>Communications</li>
        <li>Background services</li>
    </ul>
</details>

![](./assets/sg2.4.png)
