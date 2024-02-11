---
sidebar_position: 2
description: "Where we learn about operating and computer systems, what they do, their architecture, security and more"
---

# Chapter 1: Introduction

## Objectives of this chapter
- How is a computer system organized?
- What is the point of interrupts?
- What components is a modern multiprocessor computer system composed of?
- What is user mode?
- What is kernel mode?
- Can you illustrate the transition between user mode and kernel mode?
- How are operating systems used in different computing environments?
- Can you name examples of free and open source operating systems?

## Chapter 1.1: What operating systems do

<details>
<summary>What are the 4 components of a computer system?</summary>
<div>- Hardware</div>
<div>- Application programs</div>
<div>- Operating system</div>
<div>- A user</div>
</details>

<details>
<summary>What is a computer's hardware made out of?</summary>
<div>- One or more CPUs</div>
<div>- I/O devices</div>
<div>- Memory</div>
</details>


<details>
<summary>What is an Operating System (OS) composed of?</summary>
<div>- A kernel that is loaded when the computer turns on</div>
<div>- Kernel functions loaded at runtime</div>
<div>- Any system programs related to the kernel</div>
</details>

<details>
<summary>What is middleware?</summary>
<div>- These are application programs for developers that provide additional services</div>
</details>

<details>
<summary>The book's definition of what an OS is</summary>
    <div> An OS is composed of:</div>
        <ul>
            <li>A kernel that is loaded at boot time (when the computer turns on)</li>
            <li>Device drivers and kernel functions that are loaded at runtime</li>
            <li>System programs related to the kernel</li>
        </ul>
</details>

## Chapter 1.2: Computer system organization

<details>
    <summary>What is a computer's system composed of?</summary>
    <ul>
        <li>One or many CPUs</li>
        <li>One or more devices connected to the computer</li>
        <li>A device controller for each device connected to the computer</li>
        <li>A device driver for each device controller</li>
        <li>A system bus that acts as the main communications path between devices and memory</li>
    </ul>
</details>

![](./assets/fig1.2.1.png)

### Interrupts

#### Overview

<details>
<summary>What is an interrupt?</summary>
<div>A signal sent to the CPU telling it to stop what its doing and handle the device that triggered the interrupt</div>
</details>

![](./assets/fig1.2.2.png)

As you can see in the picture above, whenever the I/O device is ***in the process of transferring data***, nothing happens to the CPU.

It is only ***after the I/O device is done transferring data*** that the interrupt signal is sent to the CPU, stopping it from whatever it was doing, and forcing it to handle it.

The CPU only returns back to its previous process ***after*** handling the interrupt

#### Implementation

![](./assets/f1.2.3.png)


<details>
<summary>What is an interrupt vector table?</summary>
<div>A data structure that associates interrupt handlers with interrupt requests</div>
</details>

<details>
<summary>What must an interrupt vector table keep track of?</summary>
<div>It must keep track of the state before the CPU changed its focus to handling the interrupt</div>
</details>

<details>
<summary>How is an interrupt mechanism implemented?</summary>
    <div>- An ***interrupt request line***</div>
    <div>- An ***interrupt handler***</div>
</details>

<details>
<summary>What is an interrupt request line (IRQ)?</summary>
<div>It's an electrical line or channel that signals the CPU about an interrupt</div>
</details>

<details>
<summary>What is an interrupt handler?</summary>
<div>A block of code responsible for handling an interrupt and giving the wheel back to the CPU</div>
</details>

<details>
<summary>What is the life cycle of an interrupt?</summary>
<div>1. A device ***raises*** an interrupt</div>
<div>2. The CPU ***catches*** the interrupt</div>
<div>3. The CPU ***dispatches*** the interrupt to the interrupt handler</div>
<div>4. The interrupt handler ***clears*** the device by servicing the device</div>
</details>

<details>
<summary>What is a non-maskable interrupt (NMI)?</summary>
<div>An interrupt that the system cannot ignore</div>
</details>

<details>
<summary>What is a maskable interrupt </summary>
<div>An interrupt that the system can ignore</div>
</details>

<details>
<summary>What is interrupt chaining?</summary>
<div>Interrupt chaining is an implementation of the interrupt vector table in which each interrupt request line is associated with a linked list of interrupt handlers</div>
</details>

<details>
<summary>What problem does interrupt chaining try to solve?</summary>
<div>The problem of having more devices than available interrupt handlers</div>
</details>


### Storage structure

<details>
    <summary>What is a bootstrap program?</summary>
    <div>A program that loads the Operating System when the computer is turned on. This is the first program to run on a computer</div>
</details>

<details>
    <summary>What is electrically erasable programmable read-only memory (EEPROM) used for?</summary>
    <div>It's used for holding the bootstrap program</div>
</details>

<details>
    <summary>Why can't we store the bootstrap program in RAM?</summary>
    <div>Cause RAM is volatile, so if the computer loses power, everything in RAM is gone</div>
</details>

<details>
    <summary>Why do we use EEPROM to store the bootstrap program?</summary>
    <div>Because EEPROM is rarely written to, and it is non-volatile (this means that anything store in EEPROM survives a reboot/loss of power)</div>
</details>

![](./assets/f1.2.4.png)


### I/O Structure

<details>
    <summary>What is direct access memory (DMA)?</summary>
    <div>It's a feature of modern computers that allows a device to access a computer's main memory and transfer data independently of the CPU</div>
</details>

<details>
    <summary>Why does DMA exist?</summary>
    <div>DMA exists because it lessens the workload on the CPU</div>
</details>

![](./assets/pa1.2.3.png)

### Section Review Questions

<details>
    <summary>What do we call the signal used by device controllers to inform device drivers that it has completed an I/O operation</summary>
    <div>An interrupt</div>
</details>

<details>
    <summary>Describe what a maskable interrupt is</summary>
    <div>A maskable interrupt is an interrupt that can be temporarily disabled</div>
</details>

<details>
    <summary>Which of these has the largest capacity: Registers, hard-disk drives, or non-volatile memory</summary>
    <div>Non-volatile memory</div>
</details>

## Chapter: 1.3 Computer System Architecture

### Single-processor systems

<details>
    <summary>What is a single-processor system</summary>
    <div>A computer system with a single CPU that contains a single processing core</div>
</details>

<details>
    <summary>What does a processing core do</summary>
    <div>The core executes instructions and contains registers for locally storing data</div>
</details>

### Multiprocessor systems

<details>
    <summary>What is a multiprocessor system</summary>
    <div>A computer system (can also be a phone) that has two or more CPUs each containing a single processing core</div>
</details>

<details>
    <summary>What is the advantage of multiprocessor systems over single-processor systems?</summary>
    <div>Multiprocessor systems can do more work in less time</div>
</details>

<details>
    <summary>What is symmetric multiprocessing (SMP)?</summary>
    <div>It's a copmuter architecture of multiprocessor systems in which two or more identical processors are connected to a single shared memory</div>
</details>

[![](./assets/smp.png)](https://en.wikipedia.org/wiki/Symmetric_multiprocessing#/media/File:SMP_-_Symmetric_Multiprocessor_System.svg)

![](./assets/f1.3.1.png)

<details>
    <summary>What is the benefit of symmetric multiprocessing (SMP)?</summary>
    <div>Many processes can run simultaneously</div>
</details>

<details>
    <summary>What is a multicore system?</summary>
    <div>A processor with more than one core</div>
</details>

![](./assets/f1.3.2.png)

![](./assets/1.3definitions.png)

<details>
    <summary>What is the name of the physical chip that contains one or more CPUs</summary>
    <div>The processor</div>
</details>

<details>
    <summary>Does multicore also mean multiple CPUs? (Yes or no)</summary>
    <div>No. Multicore means multiple copmuting cores on the same CPU</div>
</details>

<details>
    <summary>Name one (or more) advantage(s) of adding additional CPUs to a multiprocessor system</summary>
    <div>Adding more CPUs increases computing power</div>
</details>

<details>
    <summary>Name one (or more) disadvantage(s) of adding more CPUs to a multiprocessor system</summary>
    <div>Adding more CPUs creates a bottleneck in the system bus</div>
</details>

<details>
    <summary>Why does adding more CPUs to a multiprocessor create a bottleneck in the system bus</summary>
    <div>The CPUs in the multiprocessor will keep trying to send data thru the system bus, but the system bus can only take so much. At one point, the system bus will not allow CPUs to send more data, and it will be like a queue where only one CPU can send data at a time</div>
</details>

<details>
    <summary>What is a non-uniform memory access (NUMA) architecture?</summary>
    <div>A NUMA is a type of multiprocessor architecture where every CPU has its own local memory that is accessed via a fast local bus</div>
</details>


<details>
    <summary>What is a shared system interconnect?</summary>
    <div>It is like a cord that connects all CPUs in a NUMA architecture so that they (the CPUs) share the same physical address</div>
</details>

<details>
    <summary>Name on drawback/disadvantage of the NUMA architecture</summary>
    <div>If CPU1 needs to access the local memory of CPU3, it'll take longer to do so. Therefore, the drawback is latency</div>
</details>

![](./assets/f1.3.3.png)

<details>
    <summary>What is a blade server?</summary>
    <div></div>
</details>

<details>
    <summary>What is a clustered system</summary>
    <div>A system that combines two or more computer systems together</div>
</details>

<details>
    <summary>What do cluster systems provide as opposed to any other system?</summary>
    <div>High-availability service. Service that will continue on even if one computer system dies in the clustered system</div>
</details>

<details>
    <summary>What is graceful degradation?</summary>
    <div>It is the ability of a clustered system to continue providing services even if parts of the system are dysfunctional or inoperative</div>
</details>

<details>
    <summary>What is a fault tolerant system?</summary>
    <div>A clustered system that can continue operations even after failure of any single component</div>
</details>

<details>
    <summary>What is asymmetric clustering?</summary>
    <div>A clustered system where one machine is idle until an active server fails, at which point it takes the responsibilities of the server that failed</div>
</details>

<details>
    <summary>What is symmetric clustering?</summary>
    <div>A clustered system where every system is running and keeping tabs on each other to make sure they don't pass out at the club (analogy to help me remember)</div>
</details>

<details>
    <summary>What is parallelization?</summary>
    <div>A process that divides a program up into separate components, and gives each component so they can run it in parallel</div>
</details>

![](./assets/f1.3.4.png)

## Chapter 1.4: Operating System Operations

<details>
    <summary>What is a system daemon?</summary>
    <div>Programs that are loaded at boot time</div>
</details>

<details>
    <summary>What is a trap (or an exception)?</summary>
    <div>A software-generated interrupt</div>
</details>

<details>
    <summary>How does multiprogramming work?</summary>
    <div>The OS keeps track of several processes in memory. The CPU executes one of them. When that process needs to wait, CPU switches focus to another process and executes it.</div>
</details>

![](./assets/f1.4.1.png)

<details>
    <summary>What is a process in a multiprogrammed system?</summary>
    <div>A program that is running (or a program that is in execution)</div>
</details>

> Idle lawyers tend to become politicians, so there is a certain social value in keeping lawyers busy

<details>
    <summary>How does multitsasking work?</summary>
    <div>Instead of letting the CPU sit idle while we wait for a process to finish executing, we frequently switch from one process to another</div>
</details>

<details>
    <summary>Why do we need CPU scheduling?</summary>
    <div>Keeping track of many processes in memory means that it is possible for more than one process to execute at the same time.</div>
    <div>Therefore, we need CPU scheduling to determine how to execute many processes when they are ready to be executed at the same time</div>
</details>

### Dual mode and multimode operations

<details>
    <summary>Why do we need to distinguish between user mode code and kernel mode code?</summary>
    <div>Because we don't want malicious or incorrect code to cause other programs in the system to execute incorrectly</div>
</details>

<details>
    <summary>What is the purpose of the mode bit?</summary>
    <div>To be able to distinguish between user mode code and kernel mode code</div>
</details>

![](./assets/f1.4.2.png)

<details>
    <summary>Denote the (6) steps of transitioning from user mode to kernel mode</summary>
    <ol>
        <li>A user program executes in user mode</li>
        <li>Program tells the OS that it wants to use a system call</li>
        <li>Asking the OS to use a system call triggers a software-generated interrupt (aka trap) that flips the mode bit (we're no in kernel mode)</li>
        <li>The system call executes in kernel mode</li>
        <li>The system call completes</li>
        <li>The user program/process is picked up again and the system is back in user mode</li>
    </ol>
</details>

![](./assets/p1.4.1.png)

<details>
    <summary>Is the hardware in kernel mode or user mode when the system boots?</summary>
    <div>It is kernel mode</div>
</details>

<details>
    <summary>What are privileged instructions?</summary>
    <div>Machine instructions that can only be executed in kernel mode</div>
</details>

### Timer   

<details>
    <summary>Why do we need timers?</summary>
    <div>To ensure that the OS always maintains control of the CPU</div>
</details>

<details>
    <summary>What does a timer do?</summary>
    <div>It interrupts the CPU after a specified amount of time</div>
</details>

## Chapter 1.5: Resource Management

<details>
    <summary>How many program counters does a single-threaded process have?</summary>
    <div>One program counter</div>
</details>

<details>
    <summary>What 3 things are operating systems responsible for when it comes to memory management?</summary>
    <ul>
        <li>Allocating and deallocating memory space as needed</li>
        <li>Deciding which processes and data to move in and out of memory</li>
        <li>Keeping track of which processes take up which addresses in memory</li>
    </ul>
</details>

<details>
    <summary>What are the 5 things an operating system is responsible for when it comes to file management?</summary>
    <ul>
        <li>Create and delete files</li>
        <li>Create and delete directories</li>
        <li>Back up files onto non-volatile storage</li>
        <li>Support functions to manipulate files like <code>touch</code> <code>cat</code> and <code>mv</code></li>
        <li>Mapping files onto mass storage</li>
    </ul>
</details>

<details>
    <summary>How does caching work?</summary>
    <div>Instead of having to retrieve information from main memory, we can put it in a cache which is like a faster and easier to access "box" temporarily</div>
</details>

![](./assets/f1.5.1.png)

![](./assets/f1.5.2.png)

<details>
    <summary>What 3 things is an I/O susbsytem made up of?</summary>
    <ul>
        <li>Memory management for buffering, caching, and spooling</li>
        <li>Drivers for specific types of devices</li>
        <li>A general device-driver interface</li>
    </ul>
</details>

<details>
    <summary>Two important design issues for cache memory are [BLANK]</summary>
    <div>Size and replacement policy</div>
</details>

<details>
    <summary>What is the name we give to an instance of a program in execution?</summary>
    <div>A process</div>
</details>

![](./assets/sg1.5.png)

## Chapter 1.6: Security and Protection

<details>
    <summary>What is protection as it pertains to Operating Systems?</summary>
    <div>Protection means any mechanism that controls the access that users and/or processes have over resources given to them by the computer system</div>
</details>

<details>
    <summary>What is the job of security in operating systems?</summary>
    <div>To defend against internal and external attacks</div>
</details>

<details>
    <summary>UNIX systems escalate privileges by seeting which attribute?</summary>
    <div>The <code>setuid</code> attribute</div>
</details>

![](./assets/sg1.6.png)

## Chapter 1.7: Virtualization

<details>
    <summary>What is virtualization?</summary>
    <div> It's like gaslighting your M2 MacBook Pro to think it has the hardware of a Windows machine</div>
</details>

![](./assets/f1.7.1.png)

![](./assets/sg1.7.png)

## Chapter 1.8: Distributed Systems

<details>
    <summary>What are distributed systems?</summary>
    <div>A collection of connected computer systems that provide users with the rersources the sum of their parts maintain</div>
</details>

<details>
    <summary>What is a network?</summary>
    <div>Like a tunnel for two or more systems to communicate with each other</div>
</details>

<details>
    <summary>What is a Local Area Network (LAN)?</summary>
    <div>A network in which computers in the same room can communicate with each other</div>
</details>

<details>
    <summary>What is a Wide Area Network (WAN)?</summary>
    <div>A network in which computers in different buildings, cities, or countries can talk to each other</div>
</details>

<details>
    <summary>What is a Personal Area Network (PAN)?</summary>
    <div>A network mostly used by Bluetooth devices to communicate with each other like Airpods and your phone</div>
</details>

<details>
    <summary>What is a network operating system?</summary>
    <div>An operating system that provides features like sharing files across a network</div>
</details>

![](./assets/sg1.8.png)

## Chapter 1.9: Kernel data structures

![](./assets/f1.9.1.png)

![](./assets/f1.9.2.png)

![](./assets/f1.9.3.png)

![](./assets/f1.9.4.png)

![](./assets/f1.9.5.png)

<details>
    <summary>What is a bitmap?</summary>
    <div>It's a string of <code>n</code> binary digits used to represent the status of <code>n</code> items</div>
</details>

![](./assets/sg1.9.png)

## Chapter 1.10: Computing environments

![](./assets/f1.10.1.png)

![](./assets/f1.10.2.png)

![](./assets/f1.10.3.png)

![](./assets/sg1.10.png)


## Chapter 1.11: Free and open-source operating systems

![](./assets/sg1.11.png)
