<script>
  export let totalItems = 12450;
  export let activeItems = 11800;
  export let healthScore = 92;
  export let healthStatus = 'Excellent';

  export let staleWarnings = [
    {
      id: 'desc-1',
      title: 'Product Descriptions',
      count: 45,
      detail: 'Pending copy updates',
      icon: 'description',
      iconBg: 'bg-[#fff8e6]',
      iconBorder: 'border-[#fcefc7]',
      iconColor: 'text-[#d97706]'
    },
    {
      id: 'inv-1',
      title: 'Inventory Levels',
      count: 12,
      detail: 'Not synced in 48h',
      icon: 'sync_problem',
      iconBg: 'bg-error-container',
      iconBorder: 'border-[#ffb4ab]',
      iconColor: 'text-error'
    },
    {
      id: 'img-1',
      title: 'Image Assets',
      count: 8,
      detail: 'Missing high-res versions',
      icon: 'image_not_supported',
      iconBg: 'bg-surface-container-highest',
      iconBorder: 'border-outline-variant',
      iconColor: 'text-on-surface-variant'
    }
  ];

  let selectedTab = 'overview';

  function handleWarningClick(warning) {
    console.log('Selected stale item category:', warning.title);
  }
</script>

<div class="flex flex-col min-h-screen bg-surface text-on-surface">
  <!-- TopAppBar -->
  <header class="w-full sticky top-0 bg-surface border-b border-outline-variant z-40 transition-colors duration-200">
    <div class="flex items-center justify-between px-container-margin py-density-compact h-16 max-w-[1600px] mx-auto">
      <div class="flex items-center gap-4">
        <div class="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant flex items-center justify-center shrink-0">
          <img
            class="w-full h-full object-cover"
            alt="Owner avatar"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7gLwmMsBSQ6w_itXX_HYGZY-v6RmGsvDarFv9B7IdPEBVn_XknxIoTlJbmhveytFkXTHpPEBBZt4KrznjHkwOOp84pUh9RWnDaK4ClekjzBouEU8KwU46uNQun89k07E8Z2cLlgijUSDvkJoTwr60YaFqm-aMOCdeTv_rWJPUmSm7iQSyrNcCKZMys7RAA4ukOz0ScpIDlhjWCy5BwVr1ay8l2XUe-T2Il78Ppjad--mc0bNjeusxODlbQU05HHLXs-cQdgSTdAq7"
          />
        </div>
        <h1 class="font-headline-md text-headline-md text-primary truncate">Catalog Health</h1>
      </div>
      <button
        type="button"
        aria-label="Search catalog materials"
        class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors text-on-surface-variant focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">search</span>
      </button>
    </div>
  </header>

  <!-- Main Content Canvas -->
  <main class="flex-1 pb-24 px-container-margin pt-density-comfortable flex flex-col gap-density-comfortable max-w-[1600px] w-full mx-auto">
    <!-- Score & Overview Bento -->
    <section aria-label="Catalog Overview" class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Health Score Widget -->
      <div class="col-span-1 md:col-span-3 lg:col-span-1 bg-surface-container-lowest border border-outline-variant rounded-xl p-density-comfortable flex flex-col items-center justify-center gap-4 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
        <h2 class="font-title-sm text-title-sm text-on-surface w-full text-left">Catalog Health Score</h2>
        <div class="relative w-32 h-32 flex items-center justify-center">
          <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
            <circle class="text-surface-container-highest" cx="50" cy="50" fill="none" r="45" stroke="currentColor" stroke-width="8"></circle>
            <circle class="text-primary" cx="50" cy="50" fill="none" r="45" stroke="currentColor" stroke-dasharray="282.7" stroke-dashoffset={282.7 * (1 - healthScore / 100)} stroke-linecap="round" stroke-width="8"></circle>
          </svg>
          <div class="absolute inset-0 flex flex-col items-center justify-center">
            <span class="font-display-lg text-display-lg text-primary">{healthScore}%</span>
            <span class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mt-1">{healthStatus}</span>
          </div>
        </div>
      </div>

      <!-- Total Items -->
      <div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-density-comfortable flex flex-col gap-2 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
        <div class="flex items-center gap-2 text-on-surface-variant">
          <span class="material-symbols-outlined text-[18px]" aria-hidden="true">inventory_2</span>
          <span class="font-label-caps text-label-caps uppercase">Total Items</span>
        </div>
        <div class="font-headline-md text-headline-md text-primary mt-1" data-testid="total-materials-count">
          {totalItems.toLocaleString('en-US')}
        </div>
      </div>

      <!-- Active Items -->
      <div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-density-comfortable flex flex-col gap-2 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow">
        <div class="flex items-center gap-2 text-on-surface-variant">
          <span class="material-symbols-outlined text-[18px]" aria-hidden="true">check_circle</span>
          <span class="font-label-caps text-label-caps uppercase">Active Items</span>
        </div>
        <div class="font-headline-md text-headline-md text-primary mt-1">
          {activeItems.toLocaleString('en-US')}
        </div>
      </div>
    </section>

    <!-- Stale Content Warnings -->
    <section aria-label="Stale Content Warnings" class="flex flex-col gap-3 mt-2">
      <h2 class="font-title-sm text-title-sm text-on-surface">Stale Content Warnings</h2>
      <ul class="flex flex-col border-y border-surface-container-high" data-testid="stale-items-list">
        {#each staleWarnings as warning (warning.id)}
          <li class="border-b border-surface-container-high last:border-0">
            <button
              type="button"
              class="flex items-start gap-4 py-3 hover:bg-surface-container-lowest transition-colors group cursor-pointer px-2 -mx-2 rounded-lg text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              on:click={() => handleWarningClick(warning)}
              aria-label={`${warning.title}: ${warning.count} items, ${warning.detail}`}
            >
              <div class={`w-10 h-10 rounded-full ${warning.iconBg} flex items-center justify-center shrink-0 border ${warning.iconBorder}`}>
                <span class={`material-symbols-outlined ${warning.iconColor}`} style="font-variation-settings: 'FILL' 1;" aria-hidden="true">
                  {warning.icon}
                </span>
              </div>
              <div class="flex-1 flex flex-col">
                <div class="flex items-center justify-between">
                  <h3 class="font-body-md text-body-md font-semibold text-primary">{warning.title}</h3>
                  <span class="font-label-code text-label-code text-on-surface-variant">{warning.count} items</span>
                </div>
                <p class="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{warning.detail}</p>
              </div>
              <span class="material-symbols-outlined text-outline-variant self-center group-hover:text-primary transition-colors" aria-hidden="true">
                chevron_right
              </span>
            </button>
          </li>
        {/each}
      </ul>
    </section>
  </main>

  <!-- BottomNavBar -->
  <nav aria-label="Main Navigation" class="fixed bottom-0 w-full z-50 bg-surface border-t border-outline-variant pb-safe">
    <div class="flex justify-around items-center h-16 px-4 max-w-[1600px] mx-auto">
      <button
        type="button"
        class={`flex flex-col items-center justify-center flex-1 h-full gap-1 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg ${selectedTab === 'overview' ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
        on:click={() => (selectedTab = 'overview')}
        aria-current={selectedTab === 'overview' ? 'page' : undefined}
      >
        <div class={`px-4 py-1 rounded-full transition-colors ${selectedTab === 'overview' ? 'bg-primary-container text-on-primary-container' : 'group-hover:bg-surface-container-low'}`}>
          <span class="material-symbols-outlined" style={`font-variation-settings: 'FILL' ${selectedTab === 'overview' ? 1 : 0};`}>
            dashboard
          </span>
        </div>
        <span class="font-label-caps text-label-caps">Overview</span>
      </button>

      <button
        type="button"
        class={`flex flex-col items-center justify-center flex-1 h-full gap-1 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg ${selectedTab === 'catalog' ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
        on:click={() => (selectedTab = 'catalog')}
        aria-current={selectedTab === 'catalog' ? 'page' : undefined}
      >
        <div class={`px-4 py-1 rounded-full transition-colors ${selectedTab === 'catalog' ? 'bg-primary-container text-on-primary-container' : 'group-hover:bg-surface-container-low'}`}>
          <span class="material-symbols-outlined" style={`font-variation-settings: 'FILL' ${selectedTab === 'catalog' ? 1 : 0};`}>
            inventory_2
          </span>
        </div>
        <span class="font-label-caps text-label-caps">Catalog</span>
      </button>

      <button
        type="button"
        class={`flex flex-col items-center justify-center flex-1 h-full gap-1 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg ${selectedTab === 'alerts' ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
        on:click={() => (selectedTab = 'alerts')}
        aria-current={selectedTab === 'alerts' ? 'page' : undefined}
      >
        <div class={`px-4 py-1 rounded-full transition-colors relative ${selectedTab === 'alerts' ? 'bg-primary-container text-on-primary-container' : 'group-hover:bg-surface-container-low'}`}>
          <span class="absolute top-1 right-3 w-2 h-2 bg-error rounded-full"></span>
          <span class="material-symbols-outlined" style={`font-variation-settings: 'FILL' ${selectedTab === 'alerts' ? 1 : 0};`}>
            warning
          </span>
        </div>
        <span class="font-label-caps text-label-caps">Alerts</span>
      </button>

      <button
        type="button"
        class={`flex flex-col items-center justify-center flex-1 h-full gap-1 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg ${selectedTab === 'settings' ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
        on:click={() => (selectedTab = 'settings')}
        aria-current={selectedTab === 'settings' ? 'page' : undefined}
      >
        <div class={`px-4 py-1 rounded-full transition-colors ${selectedTab === 'settings' ? 'bg-primary-container text-on-primary-container' : 'group-hover:bg-surface-container-low'}`}>
          <span class="material-symbols-outlined" style={`font-variation-settings: 'FILL' ${selectedTab === 'settings' ? 1 : 0};`}>
            settings
          </span>
        </div>
        <span class="font-label-caps text-label-caps">Settings</span>
      </button>
    </div>
  </nav>
</div>
