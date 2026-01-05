<script setup lang="ts">
/**
 * Navbar Component
 * Main navigation bar for the Finture Pay application
 * Responsive design that adapts to mobile, tablet, and desktop views
 * Mobile menu uses drawer for better UX
 */
interface NavLink {
  title: string
  path: string
  dropdownItems?: DropdownItem[]
}

interface Props {
  logoSrc?: string
  logoAlt?: string
  navLinks?: NavLink[]
}

interface DropdownItem {
  title: string
  description: string
  icon: string
  path: string
}

const props = withDefaults(defineProps<Props>(), {
  logoSrc: '/assets/images/logo.svg',
  logoAlt: 'Finture Logo',
  navLinks: () => [
    {
      title: 'Individual',
      path: '/individual',
      dropdownItems: [
        {
          title: 'Wallet',
          description: 'Lorem ipsum dolor sit amet consectetur.',
          icon: 'line:wallet03',
          path: '/individual/wallet',
        },
        {
          title: 'Card',
          description: 'Habitant quis elementum diam sed nisi sagittis auctor vel morbi.',
          icon: 'line:creditCard02',
          path: '/individual/card',
        },
        {
          title: 'Campaigns',
          description: 'Egestas turpis mi mus iaculis tortor viverra id cras integer.',
          icon: 'line:flash',
          path: '/individual/campaigns',
        },
      ],
    },
    { title: 'Business', path: '/business' },
    { title: 'Fees and Commissions', path: '/fees' },
    { title: 'Blog', path: '/blog' },
    { title: 'Help Center', path: '/help' },
  ],
})

// Mobile menu drawer state
const mobileMenuOpen = ref(false)
const openDropdown = ref<string | null>(null)
const mobileDropdownOpen = ref<string | null>(null)
let dropdownCloseTimer: ReturnType<typeof setTimeout> | null = null
const currentDropdownItems = computed(
  () => props.navLinks?.find((link) => link.title === openDropdown.value)?.dropdownItems ?? []
)

/**
 * Closes the mobile menu drawer
 */
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  mobileDropdownOpen.value = null
}

/**
 * Toggles the mobile menu drawer
 */
const toggleMobileMenu = () => {
  closeDropdownMenu()
  mobileMenuOpen.value = !mobileMenuOpen.value

  if (!mobileMenuOpen.value) {
    mobileDropdownOpen.value = null
  }
}

const closeDropdownMenu = () => {
  openDropdown.value = null
}

const clearDropdownCloseTimer = () => {
  if (dropdownCloseTimer) {
    clearTimeout(dropdownCloseTimer)
    dropdownCloseTimer = null
  }
}

const scheduleDropdownClose = () => {
  clearDropdownCloseTimer()
  dropdownCloseTimer = setTimeout(() => {
    closeDropdownMenu()
    dropdownCloseTimer = null
  }, 150)
}

const handleDesktopHover = (link: NavLink) => {
  if (!link.dropdownItems?.length) {
    closeDropdownMenu()
    return
  }

  clearDropdownCloseTimer()
  closeMobileMenu()
  openDropdown.value = link.title
}

const isDropdownOpen = (title: string) => openDropdown.value === title

const handleNavClick = () => {
  closeDropdownMenu()
}

const toggleMobileDropdown = (title: string) => {
  mobileDropdownOpen.value = mobileDropdownOpen.value === title ? null : title
}

/**
 * Watch drawer state and lock/unlock body scroll
 */
watch([mobileMenuOpen, openDropdown], ([isMobileOpen, activeDropdown]) => {
  if (import.meta.client) {
    if (isMobileOpen || activeDropdown) {
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100vh'
    } else {
      document.body.style.overflow = ''
      document.body.style.height = ''
    }
  }
})

/**
 * Cleanup on component unmount
 */
onBeforeUnmount(() => {
  if (import.meta.client) {
    document.body.style.overflow = ''
    document.body.style.height = ''
  }

  clearDropdownCloseTimer()
  closeDropdownMenu()
})
</script>

<template>
  <nav class="navbar bg-white">
    <u-container
      class="d-flex flex-column justify-center pa-0"
      style="
        height: 72px;
        padding-left: var(--page-padding, 16px);
        padding-right: var(--page-padding, 16px);
      "
    >
      <div
        class="d-flex justify-space-between align-center ga-4 px-4 px-md-0"
        style="z-index: 100; width: 100%"
      >
        <!-- Logo -->
        <div class="d-flex flex-shrink-0 align-center">
          <NuxtLink to="/" class="logo-link">
            <u-img :src="props.logoSrc" :alt="props.logoAlt" class="logo" />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation Links -->
        <div class="nav-links-desktop d-none d-lg-flex">
          <div v-for="link in props.navLinks" :key="link.path" class="nav-link-wrapper">
            <NuxtLink
              :to="link.path"
              :class="[
                'nav-link label-2',
                { opened: link.dropdownItems?.length && isDropdownOpen(link.title) },
              ]"
              :aria-expanded="link.dropdownItems?.length ? isDropdownOpen(link.title) : undefined"
              @mouseenter="handleDesktopHover(link)"
              @focus="handleDesktopHover(link)"
              @mouseleave="scheduleDropdownClose"
              @click="handleNavClick"
            >
              {{ link.title }}
            </NuxtLink>
          </div>
        </div>
        <div class="d-flex align-center ga-4">
          <!-- Desktop Action Buttons -->
          <div class="d-none d-sm-flex flex-shrink-0 align-center ga-4">
            <NuxtLink to="/login" class="btn-login">
              <span class="label-2">Login</span>
            </NuxtLink>
            <NuxtLink to="/register" class="btn-register">
              <span class="label-2">Finture Registration Form</span>
            </NuxtLink>
          </div>

          <!-- Mobile Menu Toggle -->
          <div class="d-flex d-lg-none align-center">
            <u-btn
              :icon="mobileMenuOpen ? 'line:xClose' : 'line:menu03'"
              variant="text"
              color="B10"
              aria-label="Toggle navigation menu"
              @click="toggleMobileMenu"
            />
          </div>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <div v-if="mobileMenuOpen" class="mobile-menu d-block d-lg-none">
        <u-container>
          <div class="d-flex flex-column pa-2">
            <div v-for="link in props.navLinks" :key="link.path" class="d-flex flex-column ga-1">
              <button
                v-if="link.dropdownItems?.length"
                type="button"
                :class="[
                  'mobile-nav-link mobile-nav-toggle label-2',
                  { opened: mobileDropdownOpen === link.title },
                ]"
                :aria-expanded="mobileDropdownOpen === link.title"
                @click="toggleMobileDropdown(link.title)"
              >
                {{ link.title }}
              </button>
              <NuxtLink
                v-else
                :to="link.path"
                class="mobile-nav-link label-2"
                @click="closeMobileMenu"
              >
                {{ link.title }}
              </NuxtLink>

              <Transition name="mobile-dropdown-transition">
                <div
                  v-if="link.dropdownItems?.length && mobileDropdownOpen === link.title"
                  class="d-flex flex-column ga-2 mt-1 mb-6 px-4 opened"
                >
                  <NuxtLink
                    v-for="item in link.dropdownItems"
                    :key="item.title"
                    :to="`${item.path}`"
                    class="d-flex align-start ga-3 rounded-lg pa-3 text-decoration-none text-B10 dropdown-item"
                    @click="closeMobileMenu"
                  >
                    <div
                      class="d-inline-flex flex-shrink-0 justify-center align-center rounded-lg bg-B80 dropdown-icon"
                      style="width: 40px; height: 40px"
                      aria-hidden="true"
                    >
                      <u-icon :icon="item.icon" class="two-tone-icon" size="26" color="B10" />
                    </div>
                    <div class="d-flex flex-column ga-1">
                      <p class="mobile-dropdown-title">{{ item.title }}</p>
                      <p class="mobile-dropdown-description">{{ item.description }}</p>
                    </div>
                  </NuxtLink>
                </div>
              </Transition>
            </div>
          </div>

          <!-- Mobile Action Buttons -->
          <div class="mobile-nav-actions d-flex d-sm-none">
            <NuxtLink to="/login" class="btn-login-mobile" @click="closeMobileMenu">
              <span class="label-2">Login</span>
            </NuxtLink>
            <NuxtLink to="/register" class="btn-register-mobile" @click="closeMobileMenu">
              <span class="label-2">Register</span>
            </NuxtLink>
          </div>
        </u-container>
      </div>
    </u-container>
  </nav>

  <Transition name="desktop-dropdown-transition">
    <div
      v-if="openDropdown && currentDropdownItems.length"
      class="desktop-dropdown d-none d-lg-block"
      role="menu"
      aria-label="Individual menu"
      @mouseenter="clearDropdownCloseTimer"
      @mouseleave="scheduleDropdownClose"
    >
      <u-container>
        <div class="d-flex flex-column ga-2">
          <NuxtLink
            v-for="item in currentDropdownItems"
            :key="item.title"
            :to="`${item.path}`"
            class="d-flex align-start ga-3 rounded-lg pa-3 text-decoration-none text-B10 dropdown-item"
            role="menuitem"
            @click="closeDropdownMenu"
          >
            <div
              class="d-inline-flex flex-shrink-0 justify-center align-center rounded-lg bg-B80 dropdown-icon"
              style="width: 44px; height: 44px"
              aria-hidden="true"
            >
              <u-icon :icon="item.icon" class="two-tone-icon" size="28" color="B10" />
            </div>
            <div class="d-flex flex-column ga-1">
              <p class="dropdown-title">{{ item.title }}</p>
              <p class="dropdown-description">{{ item.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </u-container>
    </div>
  </Transition>

  <!-- Mobile Menu Overlay -->
  <div v-if="mobileMenuOpen" class="mobile-overlay d-lg-none" @click="closeMobileMenu" />
  <div v-if="openDropdown" class="desktop-overlay d-none d-lg-block" @click="closeDropdownMenu" />
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 3px rgba(11, 9, 2, 0.1);
  background-color: #ffffff;
}

.logo-link {
  display: flex;
  align-items: center;
  transition: opacity 0.2s ease;
  text-decoration: none;
}

.logo-link:hover {
  opacity: 0.8;
}

.logo {
  display: block;
  margin: 0;
  width: 120px;
  height: 44px;
  object-fit: contain;
}

.nav-links-desktop {
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 64px;
}

.nav-link {
  transition: color 0.2s ease;
  cursor: pointer;
  border-radius: 80px;
  padding: 6px 16px;
  color: #0b0902;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  white-space: nowrap;
}

.nav-link:hover {
  color: #0047ab;
}

.nav-link.opened,
:deep(.nav-link.router-link-exact-active) {
  background-color: #e8eff8;
  color: #0047ab;
}

.nav-link-wrapper {
  position: relative;
}

.dropdown-panel {
  display: flex;
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  flex-direction: column;
  gap: 12px;
  z-index: 140;
  box-shadow: 0 12px 24px rgba(11, 9, 2, 0.12);
  border: 1px solid #dddee4;
  border-radius: 16px;
  background-color: #ffffff;
  padding: 16px;
  min-width: 360px;
}

.dropdown-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.dropdown-item {
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

.dropdown-item:hover,
:deep(.dropdown-item.router-link-exact-active) {
  background-color: #f4f4f6;
}

.dropdown-item:hover .dropdown-icon,
:deep(.dropdown-item.router-link-exact-active) .dropdown-icon {
  background-color: #fff !important;
}

.dropdown-title {
  margin: 0;
  color: #0b0902;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.1px;
}

.dropdown-description {
  margin: 0;
  color: #2f2f2f;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
}

.desktop-dropdown {
  position: fixed;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 140;
  box-shadow: 0 12px 24px rgba(11, 9, 2, 0.12);
  border-bottom: 1px solid #dddee4;
  background-color: #ffffff;
  padding: 20px 0 28px;
}

.desktop-dropdown-transition-enter-active,
.desktop-dropdown-transition-leave-active {
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
}

.desktop-dropdown-transition-enter-from,
.desktop-dropdown-transition-leave-to {
  transform: translateY(-8px);
  opacity: 0;
}

.mobile-dropdown-transition-enter-active,
.mobile-dropdown-transition-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.mobile-dropdown-transition-enter-from,
.mobile-dropdown-transition-leave-to {
  transform: translateY(-6px);
  opacity: 0;
}

.btn-login {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  border: 2px solid #0047ab;
  border-radius: 100px;
  background-color: #ffffff;
  padding: 10px 24px;
  height: 44px;
  color: #0047ab;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  white-space: nowrap;
}

.btn-login:hover {
  background-color: #f4f4f6;
  color: #175ab3;
}

.btn-login:active {
  background-color: #e8eaed;
}

.btn-register {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  border: none;
  border-radius: 100px;
  background-color: #0047ab;
  padding: 10px 24px;
  height: 44px;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  white-space: nowrap;
}

.btn-register:hover {
  background-color: #175ab3;
}

.btn-register:active {
  background-color: #002f6c;
}

.mobile-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  animation: fadeIn 0.3s ease-out;
  cursor: pointer;
  background-color: rgba(11, 9, 2, 0.5);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.mobile-menu {
  position: fixed;
  top: 72px;
  right: 0;
  left: 0;
  flex-direction: column;
  z-index: 101;
  animation: slideDown 0.3s ease-out;
  box-shadow: 0 4px 8px rgba(11, 9, 2, 0.1);
  background-color: #ffffff;
  padding: 16px 0;
  overflow-y: auto;
}

@keyframes slideDown {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.mobile-nav-link {
  display: block;
  transition: background-color 0.2s ease;
  border-radius: 8px;
  padding: 12px 16px;
  color: #0b0902;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
}

.mobile-nav-link:hover,
.mobile-nav-link.opened {
  background-color: #f4f4f6;
  color: #0047ab;
}

.mobile-nav-toggle {
  cursor: pointer;
  border: none;
  background: none;
  padding: 12px 16px;
  width: 100%;
  text-align: left;
}

.mobile-nav-toggle:focus-visible {
  outline: 2px solid #0047ab;
  outline-offset: 2px;
}

.mobile-nav-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
  padding: 0 16px;
}

.mobile-dropdown-title {
  margin: 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}

.mobile-dropdown-description {
  margin: 0;
  color: #2f2f2f;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
}

.desktop-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 90;
  background-color: rgba(11, 9, 2, 0.5);
}

.btn-login-mobile {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  border: 2px solid #0047ab;
  border-radius: 100px;
  background-color: #ffffff;
  padding: 10px 24px;
  height: 44px;
  color: #0047ab;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
}

.btn-login-mobile:hover {
  background-color: #f4f4f6;
  color: #175ab3;
}

.btn-register-mobile {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  border: none;
  border-radius: 100px;
  background-color: #0047ab;
  padding: 10px 24px;
  height: 44px;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
}

.btn-register-mobile:hover {
  background-color: #175ab3;
}

@media (max-width: 1918.98px) {
}

@media (max-width: 1278.98px) {
  .nav-link {
    font-size: 14px;
  }

  .btn-login,
  .btn-register {
    padding: 8px 16px;
    height: 40px;
    font-size: 14px;
  }
}

@media (max-width: 958.98px) {
}

@media (max-width: 598.98px) {
  .mobile-menu {
    bottom: 0;
  }
}
</style>
