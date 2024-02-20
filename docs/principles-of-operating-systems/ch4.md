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

![](./assets/sg4.1.png)

## Chapter 4.2: Multicore programming

<details>
    <summary>What is a multicore system?</summary>
    <div>A system that contains a single processing chip with multiple computing cores</div>
</details>


![](./assets/pa4.2.1.png)

![](./assets/pa4.2.2.png)

<details>
    <summary>What is the difference between concurrency and parallelism?</summary>
    <div>Concurrency: Every task in your to-do list gets to make progress!</div>
    <div>Parallelism: You can do more than one task at the same time</div>
</details>

<details>
    <summary>What are the 5 challenges that arise when programming for multicore systems?</summary>
    <ul>
        <li>Identifying tasks: this means where in my program can I find areas that can benefit from parallellism and/or concurrency?</li>
        <li>Balance: this means that each task must perform equal work of equal value</li>
        <li>Data splitting: this means dividing the data into separate cores</li>
        <li>Dats dependency: make sure one task's data isn't dependent on another task's data</li>
        <li>Testing and debugging is a pain in the butt LOL</li>
    </ul>
</details>

![](./assets/amdahls-law.png)

<details>
    <summary>What is data parallelism?</summary>
    <div>1 data over cores</div>
    <div>1 data, several cores performing the same operation</div>
    <div>Distribute one data over several threads that perform the same operation on the data</div>
    <div>Think of summing an array by having thread $T1$ sum $[0] ... [n/2 - 1]$ on core 0, and $T2$ sum $[n/2-1] ... [n-1]$ on core 1</div>
</details>

<details>
    <summary>What is task parallelism?</summary>
    <div>Tasks (threads) over cores</div>
    <div>Distribute threads across multiple cores</div>
    <div>Imagine a polyamorous couple (threads) who has to do household chores (operations on some data). One person can do the dishes while another takes out the trashwhile another cleans the bathroom while another buys groceries</div>
</details>

![](./assets/f4.2.1.png)

<details>
    <summary>A [BLANK] system allows more than one task to run simultaneously</summary>
    <div>Parallel</div>
</details>

<details>
    <summary></summary>
    <div></div>
</details>

![](./assets/sg4.2.png)

## Chapter 4.3: Multithreading models

We'll be looking at 3 ways of how to establish a relationship between user threads and kernel threads

![](./assets/f4.3.1.png)

<details>
    <summary>What are the 3 common ways/models to establish a relationship between user and kernel threads</summary>
    <ul>
        <li>Many-to-one model</li>
        <li>One-to-one model</li>
        <li>Many-to-many model</li>
    </ul>
</details>

<details>
    <summary>What is the many-to-one model all about?</summary>
    <div>Have one kernel thread, and assign a bunch of user threads to it</div>
</details>

<details>
    <summary>What is a disadvantage of the many-to-one model</summary>
    <div>If a thread needs to make a blocking sys call, the entire process will block</div>
    <div>Parallelism is not possible because only one thread can access the kernel at a time</div>
</details>

![](./assets/f4.3.2.png)

<details>
    <summary>What is the one-to-one model all about?</summary>
    <div>One kernel thread per user thread</div>
</details>

<details>
    <summary>What is a disadvantage of the one-to-one model?</summary>
    <div>If you got 9283746 user threads, you're gonna need 9283746 kernel threads. This has an impact on the performance of a system</div>
</details>

![](./assets/f4.3.3.png)

<details>
    <summary>What is the many-to-many model all about?</summary>
    <div>Take $n$ user level threads, and assign $\le n$ kernel threads to each of them</div>
</details>

![](./assets/f4.3.4.png)

<details>
    <summary>Which multithreding model is used by both Linux and Windows?</summary>
    <div>One-to-one model</div>
</details>

![](./assets/sg4.3.png)

## Chapter 4.4: Thread libraries

Where we talk about thread creation in POSIX Pthreads, Windows, and Java

<details>
    <summary>What is asynchronous threading all about?</summary>
    <div>Parent thread creates child thread, then parent continues execution alongside its child (concurrently and independently of one another)</div>
    <div>This means no data sharing between father and son</div>
</details>

<details>
    <summary>What is synchronous threading all about?</summary>
    <div>Father thread creates children, then wait for its children to be done with their jobs before continuing execution</div>
</details>

<details>
    <summary>What is Pthreads?</summary>
    <div>It is a specification for how threads should behave, NOT an implementation</div>
</details>

![](./assets/f4.4.1.png)

![](./assets/f4.4.2.png)

![](./assets/f4.4.3.png)

![](./assets/f4.4.4.png)

![](./assets/sg4.4.png)

## Chapter 4.5: Implicit Threading

Where we continue talking about the problems of threading in multicore systems as they relato to program correctness.

We'll talk about 4 approaches to implicit threading.

<details>
    <summary>What is implicit threading?</summary>
    <div>Transferring the responsability of creating nad managing threads from app devs to compilers and run=time libraries</div>
</details>

<details>
    <summary>What is the general idea behind a thread pool?</summary>
    <div>You make a bunch of threads at start-up, then when you need a thread for something, you pikc on eout from the pool of threads you just made</div>
</details>

<details>
    <summary>What happens if there are no available threads in the pool?</summary>
    <div>The task is queued until a thread is available</div>
</details>

<details>
    <summary>What are the 3 benefits of thread pools?</summary>
    <ul>
        <li>Picking a thread from the pool is faster then creating one</li>
        <li>Separating thread creation from task performance is a good thing!</li>
        <li>Putting limits on how many threads you have makes your CPU a happier CPU!</li>
    </ul>
</details>

<details>
    <summary>What is the idea of the for-join model?</summary>
    <div>Parent thread creates many kids, then waits for its kids to finish their job and join the parent</div>
</details>

![](./assets/f4.5.2.png)

![](./assets/pa4.5.2.png)

![](./assets/f4.5.3.png)

![](./assets/f4.5.4.png)

<details>
    <summary>What is referred to by tasks?</summary>
    <div>Sections of code</div>
</details>

<details>
    <summary>How does GCD (Grand central dispatch) work?</summary>
    <div>GCD places tasks on a dispatch queue that then get assigned to a thread from a pool of threads managed by GCD</div>
</details>

<details>
    <summary>What is a serial dispatch queue?</summary>
    <div>A dispatch queue where removed tasks must complete execution before another task is removed</div>
</details>

<details>
    <summary>What is a concurrent dispatch queue?</summary>
    <div>A dispatch queue where several tasks may be removed at a time</div>
</details>

<details>
    <summary>What does OpenMP do when it encoutner the `#pragma omp parallel` directive?</summary>
    <div>It creates as many threads as there are processing cores</div>
</details>

![](./assets/sg4.5.png)
