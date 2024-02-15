---
description: "Where I include my notes from in-person lectures"
---

# Lectures

## 2024-01-31

Main responsibility of an OS is (Resource management)

Gold traces in your motherboard are system busses. They're used to communicate between devices and the computer

CPUs have to be interrupted in order to be able to do everything they're able to do

PC counter keeps track of the next instruction in the RIP register

Interrupt types:
- Polling interrupts:
    - Checking and waitng
    - Going back and forth between two places to see if the interrupt is where it has changed
    - 
- Vectored interrupt system

Interrupt drive I/O cycle:
- Devce driver initates I/o

What is a `syscall`?
- idk booger

Why must memory request and allocation be random?
- Memory allocation can be dynamic
- Doing shit sequentially is slow as shit


Storage Hierarchy
- Caching
    - Give data a temporary holding space instead of going all the way to data
- Device drivers

Talked about DMA
Multiprocessors are used for specialized tasks (special-purpose processors)

theres symmetric and assymmetric processing

Symmetric mutliprocessors do

there are inter connects between cpus

We talked about clustered systems
- Storage-area netowrks
- Asymmetric clustering
- Symmetruc clustering
- High performance computing


We talked about Operating system operations
- Bootstrap program
- Kernel loads
- System daemons
- Interrupt-driven kernel (software and hardware)

We talked about multiprogramming (batch system)
We talked about timesharing and multitasking

We talked about dual-mode
We talked about user mode vs kernel mode
We talked about transitions from user to kernel mode
We talked about the program counter 
We talked about process management


## 2024-02-12

We're gonna focus on process stuff this week (chapter 3)

- Process concept
- Process scheduling
- Operations on processes
- Interprocess communication
- IPC (Inner process communications) in Shared-memory stsems
- IPC in message-passing systems
- Examples of IPC systems
- Communication in client-server systems

Parts of a process:
- Program counter (counts and gets the next instruction)
    - How many bytes does the program counter increment (depends on the size of the instruction)
- Stack
    - Contains temporary data
- Data section
    - Contains global vars
- The Heap
    - Contains memory dynamically allocated during runtime

We talked about how the stack works/looks (it grows downwards)

We talked about process states
- New
- Ready
- Waiting
- Running
- Terminated

We talked about the process control block (PCB)

We briefly talked abot threads

We talked about process representation in linux

We talked about process scheduling
- Maintains scheduling queues
    - Ready queue
    - Wait queues
    - Process migrate among queues

We looked at ready and wait queues

We looked at a context switch from process to process

Context switch comes with overhead

We talked about multitasking in mobile systems

Systems must provide mechanisms for:
- Process creation
- Process termination

Difference between context switching and interrupts
- Interrupts only tell the cpu that something external needs attention
- Context switching has no external influence

We talked about process creation

We saw an example in c o creating a process in Linux

We talked about process termination





