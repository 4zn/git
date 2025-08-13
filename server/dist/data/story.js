export const storyEpisodes = [
    {
        id: 'ep-1',
        title: 'New Dawn Over Helios',
        synopsis: 'A city teeters as the Umbral Eclipse surges. You awaken to a calling you cannot ignore.',
        narrative: 'Helios City hums under an uneasy sky. Sirens. Flickers. Then the light bends, and something ancient looks back. Your power snaps awake. A distress ping blares: an evacuation convoy has stalled by the river spires.',
        choices: [
            { id: 'c-1a', text: 'Secure the civilians in the convoy.', outcomeSummary: 'You prioritize protection, drawing fire.', nextEpisodeId: 'ep-2' },
            { id: 'c-1b', text: 'Hunt the source of the disruption.', outcomeSummary: 'You track the anomaly into the spires.', nextEpisodeId: 'ep-3' }
        ]
    },
    {
        id: 'ep-2',
        title: 'Convoy Under Fire',
        synopsis: 'Protect the vulnerable and stabilize the route.',
        narrative: 'Drones strafe the street as panicked families huddle under fractured light. A corrupted traffic nexus spills phantom signals, confusing your comms.',
        choices: [
            { id: 'c-2a', text: 'Form a defensive phalanx and escort.', outcomeSummary: 'Civilians move, slow but safe.', nextEpisodeId: 'ep-4' },
            { id: 'c-2b', text: 'Overload and purge the traffic nexus.', outcomeSummary: 'The street clears but you risk cascade faults.', nextEpisodeId: 'ep-5' }
        ]
    },
    {
        id: 'ep-3',
        title: 'Spires of Signal',
        synopsis: 'Trace the phantom signature pulsing across the skyline.',
        narrative: 'Within the glass galleries, the air smells like ozone and old code. A silhouette glitches between floors, watching.',
        choices: [
            { id: 'c-3a', text: 'Pursue the silhouette head-on.', outcomeSummary: 'You force the entity to react.', nextEpisodeId: 'ep-5' },
            { id: 'c-3b', text: 'Split up and triangulate.', outcomeSummary: 'Risky, but you close the net.', nextEpisodeId: 'ep-4' }
        ]
    },
    {
        id: 'ep-4',
        title: 'Echoes in the Grid',
        synopsis: 'An ally surfaces with warnings about the Eclipse.',
        narrative: 'A masked signalist—callsign Oriole—patches through. "It is not a storm. It is a door. And something is learning to open it from our side."',
        choices: [
            { id: 'c-4a', text: 'Trust Oriole and follow the lead.', outcomeSummary: 'You uncover a hidden relay.', nextEpisodeId: 'ep-6' },
            { id: 'c-4b', text: 'Set a trap for the entity instead.', outcomeSummary: 'You prepare an ambush at the relay.', nextEpisodeId: 'ep-7' }
        ]
    },
    {
        id: 'ep-5',
        title: 'Umbraform',
        synopsis: 'The anomaly manifests a host—your first true test.',
        narrative: 'The floor ripples. The spires exhale. From a fold in reality, a figure unfolds: all edges and absence, eyes like voided moons.',
        choices: [
            { id: 'c-5a', text: 'Contain with hardlight and rites.', outcomeSummary: 'You restrain the host briefly.', nextEpisodeId: 'ep-6' },
            { id: 'c-5b', text: 'Strike fast to disrupt cohesion.', outcomeSummary: 'The form shatters—only to reform elsewhere.', nextEpisodeId: 'ep-7' }
        ]
    },
    {
        id: 'ep-6',
        title: 'Relay of the Veiled',
        synopsis: 'Beneath Helios, a library hums with forbidden light.',
        narrative: 'The Veiled Library is real. Tomes whisper under your footsteps. A sigil burns on the relay: the glyph of an ancient oath broken.',
        choices: [
            { id: 'c-6a', text: 'Restore the oath to seal the door.', outcomeSummary: 'The pressure eases—but at cost.', nextEpisodeId: 'ep-8' },
            { id: 'c-6b', text: 'Invert the glyph to learn who broke it.', outcomeSummary: 'A name surfaces: Night Parliament.', nextEpisodeId: 'ep-8' }
        ]
    },
    {
        id: 'ep-7',
        title: 'Ambush at Dusk',
        synopsis: 'You spring the trap as the city holds its breath.',
        narrative: 'The entity arrives wearing a human voice: your mentor, your friend, your fear. It whispers that the Eclipse was invited.',
        choices: [
            { id: 'c-7a', text: 'Sever the link without mercy.', outcomeSummary: 'The voice goes silent. The city shudders.', nextEpisodeId: 'ep-8' },
            { id: 'c-7b', text: 'Risk a dialogue through the link.', outcomeSummary: 'You glimpse a parliament in the dark.', nextEpisodeId: 'ep-8' }
        ]
    },
    {
        id: 'ep-8',
        title: 'Eclipse Protocol',
        synopsis: 'You gather allies to confront the Night Parliament.',
        narrative: 'Helios rallies. Factions align uneasily. The sky thins. Doors, everywhere. The choice is not whether to close them—but who to leave on which side.',
        choices: [
            { id: 'c-8a', text: 'Seal the city at any cost.', outcomeSummary: 'Helios survives. The world narrows.', nextEpisodeId: null },
            { id: 'c-8b', text: 'Open one door—on your terms.', outcomeSummary: 'A risky alliance with the dark.', nextEpisodeId: null }
        ]
    }
];
