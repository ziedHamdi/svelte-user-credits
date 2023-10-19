<script>
  import { IOffer } from 'user-credits';
  import { getContext } from 'svelte';

  import { IResourceResolver } from '../ioc/IResourceResolver';
  import { buildClass } from '../core/util';
  import { NAME } from '../ioc/resolverContext';
  import { IOfferProps } from '../model/IOfferProps'; // Adjust the import path

  let resolver: IResourceResolver = getContext(NAME); // To store the current value of resolver

  // Subscribe to changes in the resolver store
  export let offer: IOffer;
  // let offerProps: IOfferProps = $resolver.getObject<IOfferProps>({ type:'OfferProps' } as ResourceDomain, offer) as IOfferProps;
  let offerProps: IOfferProps = $resolver.getObject({ type:'Offer' }, offer);
</script>

<div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">
  <!-- Card -->
  <div class="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
    {#if offerProps.name}
      <h4 class={buildClass('font-medium text-lg text-gray-800 dark:text-gray-200', offerProps.name)}>{offerProps.name.value}</h4>
    {/if}
    <span class="mt-7 font-bold text-5xl text-gray-800 dark:text-gray-200">{offerProps.price?.value}</span>
    {#if offerProps.description}
      <p class="mt-2 text-sm text-gray-500">{offerProps.description.value}</p>
    {/if}
    {#if offerProps.advantages}
      {#if offerProps.container}
        <ul class={buildClass('mt-7 space-y-2.5 text-sm', offerProps.container)}>
          {#each offerProps.advantages as advantage, index (index)}
            {#if advantage}
              <li class={buildClass('flex space-x-2', advantage)}>
                {advantage.prefixElement ?? ''}
                <span class={buildClass('text-gray-800 dark:text-gray-400', advantage)}>{advantage.value}</span>
                {advantage.suffixElement ?? ''}
              </li>
            {/if}
          {/each}
        </ul>
      {/if}
    {/if}
    {#if offerProps.callToAction}
      <a class={buildClass('mt-5 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-blue-500 dark:border-blue-600 dark:hover:border-blue-700', offerProps.callToAction)} href={offerProps.callToAction.link}>
        {offerProps.callToAction.value}
      </a>
    {/if}
  </div>
  <!-- End Card -->
</div>

