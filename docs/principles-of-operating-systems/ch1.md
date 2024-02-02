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
