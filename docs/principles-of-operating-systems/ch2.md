---
sidebar_position: 3
description: "Where we learn about operating and computer systems, what they do, their architecture, security and more"
---

# Chapter 2: Operating system structures

## Objectives of this chapter
- What services does an operating system provide?
- How are system calls used to provide operating system services?
- Compare and contrast monolithic, layered, microkernel, modular, and hybrid strategies for designing operating systems
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

<details>
    <summary>What does a Run-Time Environment (RTE) provide?</summary>
    <div>A full bundle of compiler, libraries, and laoders to be able to execute applications written in a given programming language</div>
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

## Chapter 2.5: Linkers and loaders

![](./assets/pa2.5.1.png)

<details>
    <summary>What does a loader do?</summary>
    <div>Loads a binary executable file into memory so we can run it</div>
</details>

<details>
    <summary>What does a linker do?</summary>
    <div>It combines relocatable objectr files into a single executable file</div>
</details>

![](./assets/sg2.5.png)

## Chapter 2.6: Why applications are operating-system specific

Wow, to make my program runnable on different operating systems, I'm gonna have to write it in either Java or an interpreted Language LOL

![](./assets/sg2.6.png)

## Chapter 2.7: Operating-system design and implementation

![](./assets/sg2.7.png)

## Chapter 2.8: Operating-system structure

<details>
    <summary>What is a monolithic structure?</summary>
    <div>A way of organizing an operating system in which you put all of the kernel's functionality into a single, static binary file that runs in a single address space</div>
</details>

<details>
    <summary>What is one advantage of monolithic structures?</summary>
    <div>They have very little overhead inthe system-call interface</div>
</details>

<details>
    <summary>What is one disadvantage of monolithic structures?</summary>
    <div>They're difficult to implement and extend</div>
</details>

![](./assets/f2.8.1.png)

![](./assets/f2.8.2.png)

<details>
    <summary>What is a layered approach structure?</summary>
    <div>It is a way of organizing an operating system by dividing it into separate, smaller components that have specific and limited functionality. The bottom layer is layer 0, the highest layer is layer N</div>
</details>

![](./assets/f2.8.3.png)

<details>
    <summary>What is one advantage of the layered approach?</summary>
    <div>It is easier to construct and debug, and changing one layer affects only that layer (as opposed to the monolithic approach where changes in one place affect everyone)</div>
</details>

<details>
    <summary>What is one disadvantage of the layered approach?</summary>
    <div>The layered approach results in poor performance due to the overhead of having to traverse so many layers</div>
</details>

<details>
    <summary>What is the microkernel approach?</summary>
    <div>It is a way of organizing an operating system by separating non-essential components from the kernel, implementing them as user-level programs, and putting them in different address spaces</div>
</details>

![](./assets/f2.8.4.png)

<details>
    <summary>What is one advantage of the microkernel approach?</summary>
    <div>Easier to extend the OS. Easier portability of OS. Increased security and reliability</div>
</details>


<details>
    <summary>What is one disadvantage of the microkernel approach?</summary>
    <div>Lower performance due to increased system-function overhead. User-level services that need to communicate with one another live in different address spaces</div>
</details>

<details>
    <summary>What is a Loadabale Kernel Module (LKM)?</summary>
    <div>An operating-system design where the kernel has a bunch of core components, and it can "call in" additional services via modules either at boot time or during run time</div>
</details>

![](./assets/sg2.8.png)

## Chapter 2.9: Building and booting an operating system

:::important
I skimmed this chapter because it seems to only talk about loading Linux, which porject 0 of this course already does
:::

![](./assets/sg2.9.png)
