<script>
	export let size = 20,
		progress = 0,
		trackWidth = 3,
		trackColor = `#ddd`,
		indicatorWidth = trackWidth,
		indicatorColor = `#07c`,
		indicatorCap = `butt`,
		label = `Loading...`,
		spinnerMode = false,
		spinnerSpeed = 0.3

	const center = size / 2,
		radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
		dashArray = 2 * Math.PI * radius;

	$:dashOffset = dashArray * ((100 - progress) / 100)
</script>

<div class="svg-pi-wrapper" style={`width:${size}px;height:${size}px`} on:click>
	<svg
		class="svg-pi"
		style={`width:${size}px;height:${size}px`}
	>
		<circle
			class="svg-pi-track"
			style={ `stroke-width:${trackWidth};`}
			cx={center}
			cy={center}
			fill="transparent"
			r={radius}
			stroke={trackColor}
		/>
		<circle
			class={`svg-pi-indicator ${spinnerMode ? "svg-pi-indicator--spinner" : ""}`}
			style={ `stroke-width:${indicatorWidth};stroke-dasharray:${dashArray};stroke-dashoffset:${dashOffset};stroke-linecap:${indicatorCap};animationDuration: ${spinnerSpeed} * 1000` }
			cx={center}
			cy={center}
			fill="transparent"
			r={radius}
			stroke={indicatorColor}
		/>
	</svg>
</div>

<style>
    .svg-pi-wrapper {
        position: relative;
				cursor: pointer;
				margin-top: -2px;
    }

    .svg-pi {
        transform: rotate(-90deg); /* Fix the orientation */
    }

    /* Animated spinner version */
    .svg-pi-indicator--spinner {
        animation: spinner .75s linear infinite;
        transform-origin: center;
    }

    .svg-pi-label {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .svg-pi-label__loading {
        opacity: .5;
        font-size: 0.75em;
    }

    .svg-pi-label__progress {
        font-size: 1.5em;
        font-weight: bold;
    }

    .svg-pi-label__loading,
    .svg-pi-label__progress {
        display: block;
    }

    /* Spinner animation */
    @keyframes spinner {
        0% {
            transform: rotate(0)
        }
        100% {
            transform: rotate(360deg)
        }
    }
</style>