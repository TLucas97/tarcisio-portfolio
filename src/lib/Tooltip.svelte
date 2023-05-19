<script>
    import { scale } from "svelte/transition";

    export let text = '';
    export let position = 'top';
  
    let tooltipVisible = false;
  
    function showTooltip() {
      tooltipVisible = true;
    }
  
    function hideTooltip() {
      tooltipVisible = false;
    }
  </script>
  
  <div class="tooltip-container" on:mouseenter={showTooltip} on:mouseleave={hideTooltip}>
    <slot />
    {#if tooltipVisible}
      <div class={`tooltip font-bold tooltip-${position}`} transition:scale>
        {text}
      </div>
    {/if}
  </div>
  
  <style>
    .tooltip-container {
      position: relative;
      display: inline-block;
    }
  
    .tooltip {
      position: absolute;
      z-index: 1;
      padding: 0.5rem;
      background-color: #333;
      color: #fff;
      border-radius: 0.25rem;
      display: inline-block;
      white-space: nowrap;
    }
  
    .tooltip-top {
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  
    .tooltip-bottom {
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  
    .tooltip-left {
      top: 50%;
      right: 100%;
      transform: translateY(-50%);
    }
  
    .tooltip-right {
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
    }
  </style>