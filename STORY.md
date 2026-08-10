# Qaila and the Kindness Quest

A story bible for the platformer game. This document is the source of truth for
the game's narrative: world, characters, values, and quests. Use it to write
in-game dialogue, design levels, and plan new features.

## 1. Premise

Qaila lives in Barakah Valley, a warm little village. A grumbling curse called
**The Grouch** is spreading through the valley. It turns cheerful little
creatures into grumpy monsters, and it makes people forget small acts of
kindness. Qaila cannot see the curse. But she has something stronger than any
sword: a kind heart. Her kindness can break the curse, one act at a time.

Every level is a small quest. Every quest teaches one value. Every monster
Qaila "defeats" is not destroyed — it is *un-grumped*, and it goes back to being
a cheerful little critter.

**Working title:** Qaila and the Kindness Quest
**Alternate titles:** Qaila's Kind Heart Adventure · Qaila and the Valley of
Little Monsters

## 2. Main Character: Qaila

- Age: 8. Brave, curious, a little bit silly, and always the first to help.
- Wears a hijab. The game already supports two outfits (Casual and Full
  Hijab) — both stay, as a wardrobe choice, not a story point.
- Her power is not violence. Her "attack" is a **Kindness Sparkle**: a burst
  of light that breaks The Grouch's curse on a monster and turns it friendly.
- Catchphrase (for popups/dialogue): *"A little kindness goes a long way!"*

## 3. The Monsters

Reframe the existing enemies as cursed critters, not villains:

| Existing sprite | Story identity | Personality once un-grumped |
|---|---|---|
| Goomba (walker) | **Grumblets** — round, grumpy little critters | Ticklish, giggly, love snacks |
| Turtle (shell) | **Shy-Shells** — hide in their shells when grumpy | Shy but loyal, love to help carry things |

Defeating one (stomp or Kindness Sparkle) plays a small heart/star burst
instead of a "kill" effect, and the critter waves and scurries off happy.

## 4. The Big Bad: The Grouch

Not a monster to kill — a lonely, sad, oversized shadow-creature who spreads
grumpiness because nobody has ever been kind *to him*. The final chapter is
not a boss fight in the usual sense: Qaila wins by showing The Grouch the
kindness he never got, and he shrinks back into a small, friendly creature who
joins the village.

This keeps the ending values-first: courage to face something big and scary,
resolved by kindness, not by force.

## 5. The Six Values (one per chapter)

1. **Kindness** — helping a neighbor with no reward expected.
2. **Honesty** — returning something you could have kept.
3. **Sharing** — giving up something you want, for someone who needs it more.
4. **Patience** — helping someone who is slow, scared, or struggling.
5. **Courage** — standing up for someone smaller or weaker.
6. **Forgiveness** — the finale: befriending The Grouch instead of fighting him.

Each chapter ends with a **Kindness Star** (a small badge) shown on a summary
screen: "You earned the Kindness Star!"

## 6. The Six Chapters (Full Detail)

### Chapter 1 — "Grandma Amina's Kitchen"

**Value:** Kindness

**Setup (NPC dialogue, shown in a popup when Qaila reaches her house):**

> **Grandma Amina:** "Oh dear! The wind blew my favorite cooking pot down the
> hill, right past the old bridge! I can't run after it — my knees aren't what
> they used to be. Could a brave girl like you fetch it for me?"

**Quest:** Run and jump through the level (the existing platforming path),
cross the bridge, and reach the pot at the far end. Grumblets block the path —
Qaila un-grumps them with jumps/Kindness Sparkles to get by, she does not need
to fight all of them.

**Obstacle beat (mid-level dialogue, a Grumblet blocking the bridge):**

> **Grumblet:** "Grr! Nobody tells ME what to do!"
> *(Qaila uses her Kindness Sparkle)*
> **Grumblet:** "...wait, why do I feel like giggling? Oh! Thank you! Here,
> take this — I found it under a rock." *(drops a small quest item / coin)*

**Resolution (return to Grandma Amina):**

> **Grandma Amina:** "You found it! You didn't have to do that, you know. But
> you did anyway. That's what kindness looks like, Qaila. Thank you."
>
> **[Chapter Complete — Kindness Star earned!]**

### Chapter 2 — "The Lost Wallet"

**Value:** Honesty

**Setup (Qaila finds a heavy coin purse on the ground at the start of the level):**

> **Qaila (thinking):** "Oh! A coin purse! It's so heavy... I wonder who
> dropped it? I should find them."

**Temptation beat (passing a toy cart partway through the level):**

> **Toy Cart Seller:** "Fresh windup toys! Only a few coins each!"
> **Qaila (thinking):** "That windup bird is so pretty... but these coins
> aren't mine. I should find their owner first."

**Quest:** Reach the marketplace at the end of the level, where a merchant is
frantically searching the ground. Grumblets and Shy-Shells block the road as
usual — un-grump them to pass.

**Resolution (return the purse to the merchant, Uncle Farid):**

> **Uncle Farid:** "My coin purse! I dropped it on the hill this morning, I've
> been searching everywhere! You... you could have kept it. Why didn't you?"
> **Qaila:** "Because it wasn't mine. That wouldn't be honest."
> **Uncle Farid:** "Well, since you're honest *and* kind — here, take this
> windup bird. You've earned it fair and square."
>
> **[Chapter Complete — Honesty Star earned!]**

### Chapter 3 — "One Basket, Two Hungry Critters"

**Value:** Sharing

**Setup (Qaila finds a full basket of apples early in the level):**

> **Qaila:** "Yum, apples! Enough for a whole week of snacks!"

**Obstacle beat (a hungry Shy-Shell family blocks a gap too wide to jump):**

> **Mama Shy-Shell:** "We haven't eaten since yesterday... my little one is so
> hungry."
> **Qaila (thinking):** "I could keep all these apples for myself... but look
> how hungry they are."
> **Qaila:** "Here — please, take some apples!"

**Quest resolution beat (the grateful Shy-Shells help her cross):**

> **Mama Shy-Shell:** "Nobody's ever shared with us before. Here — let us help
> you across!" *(the Shy-Shell family stacks their shells into a bridge)*
> **Qaila:** "Thank you so much!"
> **Mama Shy-Shell:** "No, thank *you*. Sharing tastes even better than
> apples."
>
> **[Chapter Complete — Sharing Star earned!]**

### Chapter 4 — "The Slowest Racer"

**Value:** Patience

**Setup (a young, scared Shy-Shell named Tuti is stuck at a set of moving platforms):**

> **Tuti:** "I—I can't! What if I fall?"

**Quest:** An escort section — Tuti only moves forward while Qaila stays close
and waits for him. Rushing ahead leaves him stuck and frightened; the level
cannot be finished without him.

**Obstacle beat (mid-crossing, Tuti freezes on a platform):**

> **Qaila:** "Take your time, Tuti. I'm not going anywhere without you."
> *(after a few slow, careful steps together)*
> **Tuti:** "We... we made it! I did it!"
> **Qaila:** "See? You just needed someone to wait with you."

**Resolution:**

> **Tuti's Mama:** "Oh, thank goodness! Thank you for taking such good care of
> my Tuti."
>
> **[Chapter Complete — Patience Star earned!]**

### Chapter 5 — "Leave Him Alone!"

**Value:** Courage

**Setup (Qaila hears a small Grumblet crying, cornered by a much bigger one):**

> **Big Grumblet:** "Give me your snack, shrimp!"
> **Small Grumblet:** "P-please don't..."
> **Qaila:** "Hey! Leave him alone!"
> **Big Grumblet:** "Or what? You gonna stop me?"
> **Qaila:** "Yes. Yes, I am."

**Quest:** The Big Grumblet is a tougher enemy variant — it takes more hits to
un-grump than a normal Grumblet, so standing up to it takes real effort, not
just a single easy tap.

**Resolution (the Big Grumblet, un-grumped):**

> **Big Grumblet:** "I... I don't know why I do that. Everyone's always bigger
> than someone else, and I guess I wanted to feel big too. I'm sorry."
> **Small Grumblet:** "You're forgiven. Wanna be friends instead?"
> **Qaila:** "See? Being brave doesn't mean being mean. It means standing up
> for someone."
>
> **[Chapter Complete — Courage Star earned!]**

### Chapter 6 — "The Grouch" (Finale)

**Value:** Forgiveness

**Setup (the valley's sky has gone dark; friends from every earlier chapter
gather to see Qaila off):**

> **Grandma Amina:** "Be careful, Qaila. Nobody has ever gotten close to The
> Grouch and come back the same."
> **Uncle Farid:** "But if anyone can do it... it's you."

**Confrontation (the hardest level in the game, ending at The Grouch's lair):**

> **The Grouch:** "ANOTHER one, come to chase me away? Go ahead. Everyone
> always does."
> **Qaila:** "I'm not here to chase you away."
> **The Grouch:** "...what?"

**The Five Stars beat (Qaila's five earned stars glow, one by one, as she
speaks):**

> *(Kindness Star glows)* "Remember Grandma Amina's pot..."
> *(Honesty Star glows)* "...and Uncle Farid's coin purse..."
> *(Sharing Star glows)* "...and the apples we shared..."
> *(Patience Star glows)* "...and waiting for Tuti..."
> *(Courage Star glows)* "...and standing up for a friend."
> **Qaila:** "Every single time, I could have walked away. I didn't. And I'm
> not walking away from you either."

**Turning point:**

> **The Grouch:** "Nobody... nobody ever tried to understand me before. They
> just ran away. You didn't."
> **Qaila:** "That's what kindness is for. It's for everyone — even you."
> *(The Grouch shrinks. The shadow lifts. Sunlight returns to Barakah
> Valley.)*
> **The Grouch (now small and shy):** "I... I don't know how to be anything
> else. Will you teach me?"
> **Qaila:** "That's easy. Just start with one small kind thing. I'll help."

**Epilogue (everyone gathers in the sunlight):**

> **Grandma Amina:** "Well, I never thought I'd see the day The Grouch would
> smile."
> **Small Grouch (now nicknamed "Glim"):** "Me neither."
> **Qaila:** "See? A little kindness goes a long way."
>
> **[Story Complete — All Kindness Stars earned! Barakah Valley is bright
> again.]**

## 7. Gameplay Integration Notes (for implementation later)

- **NPC dialogue popup:** reuse the existing `#legend`-style modal pattern —
  a panel with portrait, name, and text, plus a "Continue" button.
- **Quest item pickup:** repurpose the existing question-block/collectible
  pattern for quest items (pot, wallet, apples, etc.).
- **Un-grump effect:** reuse the existing stomp/attack-hit particle burst,
  recolored to soft hearts/stars instead of the current spark color.
- **Kindness Star summary screen:** small extension of the existing win
  overlay — show the star earned this chapter plus stars earned so far.
- **Chapter select / progress:** simplest version is one level per chapter,
  unlocked in order, with a small valley-map screen showing stars earned.

This is a content and design document only — no code has been changed yet.
