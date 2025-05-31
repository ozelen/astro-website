---
title: Vibecode as an architect, don't vibe architect
publishDate: 2025-30-05 00:00:00
img: "./image.png"
img_alt: Vibecode and Vibedebug.
description: |
  AI is changing how we build software—but not always how you’d expect. As an architect, I thought LLMs would help me code less. Instead, they pulled me deeper into the trenches. In this post, I share what it's like to build with AI at your side, the traps non-engineers fall into, and why prototyping is just the beginning.
tags:
  - Architecture
  - Development
  - AI
  - Vibecoding
---
AI-assisted coding is here — whether we like it or not. As it improves in writing and debugging, we software engineers are figuring out how to ride the wave. But "AI means less coding" isn’t always true. For me, the opposite happened. Over the past couple of years, working as a software architect, I’ve been writing and reviewing more code than ever.

I’ve seen people from finance, marketing, and other domains picking up AI tools and suddenly “vibe-coding” — getting into Python and building little tools. It’s inspiring. But while they may get something running, that doesn’t mean they’ve become software engineers, let alone deployed anything at scale. Owning a gun and knowing how to shoot doesn’t make you a warrior.

With LLMs, it’s easy to bootstrap a prototype with minimal programming knowledge. But once your project grows past a few dozen files, you quickly enter the land of troubleshooting, hallucinations, and endless prompts. Welcome to vibe-debugging.

The tools are improving fast — copilots, agents, context windows. They help you go further than ever before. But the farther you go without structure and discipline, the greater your chances of hitting a wall.

There’s a lot of debate around LLMs in production: are they empowering or harmful? Are they good for velocity or technical debt time bombs? Opinions are polarized. But one thing is clear — you can’t ignore this trend.

After many hours swinging between excitement and frustration, here are the principles I follow to make progress and deliver working systems with LLMs in the loop.

---

## 🧭 Project Context First

Start with the “why.” Clearly define what you're trying to accomplish from a business perspective. Write this down in plain language and save it as a `README.md` or similar file in your project root.

Include:

1. **Users and roles**
    
2. **Main use cases**
    
3. **Key integrations** (external services and their limitations)
    
4. **Constraints** (budget, deadlines, seasonality, etc.)
    

Don’t let this document drift into technical design. It’s your north star.

---

## 🎨 Sketch Before You Paint

LLMs love to jump straight into final implementations, bloating your code with edge-case handling, exceptions, and obscure options. Good engineers don’t code like that.

Like an artist, start with a clean sketch. Outline the structure and major flows first. Ask your LLM to skip error handling and exotic features until you’ve validated the core logic.

---

## 🛠️ Use the Stack You Know

Use the tech stack you know best. This is not the time to try that shiny new framework you just saw on Hacker News.

When you’re vibe-coding, **95% of your time is debugging and reviewing AI-generated code**. If you can't quickly spot flaws and understand the flow, you’ll get stuck.

If you're fluent in PHP and not in Rust, PHP will save you time — even if Rust seems cooler.

Familiar, popular frameworks like **Django, Laravel, RoR, Next.js, React, Angular** also have another benefit: LLMs are trained on them. So are your teammates.

---

## 🧱 Monolith First

Don’t start with microservices unless your day job is Kubernetes and you know exactly what you’re doing.

**Start with a monolith** and keep it modular. You can always extract services later. Most modern frameworks allow clean separation of concerns and easy refactoring.

Don’t waste energy solving scaling problems you don’t have yet. If you hit those problems — great! You’ll probably have the resources to solve them.

---

## 🔍 Stay in Control

Code review is a pain. Everyone knows it. But when you’re working with an LLM, **you’re basically doing continuous code review**.

Read everything. Piece by piece. Don’t blindly trust the suggestions. LLMs hallucinate, forget context, or make logic errors in subtle ways.

Set clear goals. Complete a chunk. Commit. Take breaks.

---

## 🧾 Commit Discipline

Commit often — but not too often.

- Keep commits **atomic**
    
- Write **clear, concise** messages
    
- Don’t rush — assume everything is disposable
    
- Don’t create branches just because you can — mess multiplies fast
    

---

## 🚀 Deploy Day One

From day one, get something running. Even a simple “Hello World” on your target infrastructure will reveal things you didn’t expect.

Be cautious with serverless platforms like **Vercel** or **AWS Lambda**. They’re incredibly convenient, but can be expensive traps if misused — especially if something goes viral.

For most indie or startup projects, the safest choice is:

- **Docker**
    
- **Open-source database**
    
- **Simple VM or container host**
    

This gives you freedom to move, scale, and even exit if needed.

---

## 🧠 Conclusion

Vibe-coding is a superpower — but only in the hands of someone who knows how to wield it. AI won’t replace engineers who understand systems, constraints, and users. But it will absolutely accelerate those who do.

As architects, we’re not just coding — we’re guiding the process, shaping the vision, and owning the consequences. AI doesn’t relieve us of that responsibility. It makes it more essential than ever.

Use the tools. Don’t let the tools use you.
