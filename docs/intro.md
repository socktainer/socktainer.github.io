---
sidebar_position: 1
---

# Introduction

Welcome to **Socktainer** 🚢 - a CLI/daemon that brings Docker compatibility to Apple's containerization framework on macOS!

## What is Socktainer?

Socktainer exposes a Docker-compatible REST API on top of Apple's containerization libraries, allowing you to use familiar Docker tools and clients to manage containers on your Apple Silicon Mac. It seamlessly bridges the gap between the Docker ecosystem and Apple's container framework.

By creating a Unix domain socket at `$HOME/.socktainer/container.sock`, Socktainer enables common Docker clients (like the Docker CLI) to interact with local containers on macOS using the standard Docker API surface 🐳💻.

## Key Features ✨

- **Built on Apple's Container Framework** 🍏 - Leverages macOS containerization capabilities
- **Docker API Compatibility** 🔄 - Provides partial compatibility with the Docker REST API
- **Unix Domain Socket** 📡 - Listens on `$HOME/.socktainer/container.sock`
- **Container Lifecycle Management** 🛠️ - Full support for inspect, start, stop, restart, kill, and remove operations
- **Image Operations** 📦 - List, pull, delete images, and build from Dockerfiles
- **Advanced Features** 📄 - Container logs, health checks, exec support, and event broadcasting
- **Volume & Network Support** 🔌 - Create and manage volumes and networks
- **Podman Desktop Integration** - Works with the [Podman Desktop Apple Container extension](https://github.com/podman-desktop/extension-apple-container) to visualize Apple containers and images

## Requirements 📋

To use Socktainer, you need:

- **macOS on Apple Silicon (arm64)** 🍏💻
  - Apple's container APIs only work on arm64 Macs
  - See [Apple container requirements](https://developer.apple.com/documentation/containerframework) for more details

## Getting Started

Ready to use Socktainer? Head over to the [Download page](/download) to get the latest release and installation instructions.

For a comprehensive list of supported Docker API endpoints and feature parity status, check out the [API Feature Parity](./api-feature-parity) documentation.

If you want to use the Docker CLI against Socktainer through a dedicated context, see [Docker Context](./docker-context).

If you need to work with registries, see [Registry Authentication](./registry-authentication).

## Community 💬

Join the Socktainer community to ask questions, share ideas, or get help:

- **Discord**: [discord.gg/Pw9VWKcUEt](https://discord.gg/Pw9VWKcUEt) – Chat in real time with contributors and users
- **GitHub Discussions**: [socktainer/discussions](https://github.com/socktainer/socktainer/discussions) – Ask questions or propose features
- **GitHub Issues**: [socktainer/issues](https://github.com/socktainer/socktainer/issues) – Report bugs or request features
