---
sidebar_position: 4
description: "Where we learn about threads"
---

# Chapter 4: Threads and concurrency

## Objectives of this chapter

- What is a thread? What is it composed of?
- How are threads different from processes?
- What are the benefits of designing multithreaded processes?
- What are the challenges of designing multithreaded processes?
- What is implicit threading?
- What are thread pools?
- What is forj-join?
- What is a Grand Central Dispatch?
- How are threads represented in Linux and Windows?

## Chapter 4.1: Overview

<details>
    <summary>What is a thread composed of?</summary>
    <ul>
        <li>An ID</li>
        <li>A program counter (PC)</li>
        <li>A register set</li>
        <li>A stack</li>
    </ul>
</details>

![](./assets/f4.1.1.png)

![](./assets/f4.1.2.png)

<details>
    <summary>What are the 4 benefits of multithreadded programs?</summary>
    <ul>
        <li>Responsiveness: now you don't have to freeze a site when a user clicks a button</li>
        <li>Resource sharing: Threads share memory with the process they belong to!</li>
        <li>Economy: it's easier to context-switch between threads than processes</li>
        <li>Scalability: </li>
    </ul>
</details>

<details>
    <summary>What is the relationship between threads and processes?</summary>
    <div>A process consists of one or more threads</div>
</details>

<details>
    <summary>What 3 things are shared between threads?</summary>
    <ul>
        <li>Code</li>
        <li>Data</li>
        <li>Files</li>
    </ul>
</details>
