<script setup lang="ts">
import { useAuthStore } from '../stores/auth'
import { Button } from '../components/ui/button'

const authStore = useAuthStore()
</script>

<template>
  <div class="min-h-screen bg-background">
    <header class="border-b">
      <div class="container flex h-16 items-center px-4">
        <nav class="flex items-center space-x-4 lg:space-x-6 mx-6">
          <RouterLink
            to="/"
            class="text-sm font-medium transition-colors hover:text-primary"
          >
            Dashboard
          </RouterLink>
          <RouterLink
            to="/orders"
            class="text-sm font-medium transition-colors hover:text-primary"
          >
            Orders
          </RouterLink>
          <RouterLink
            to="/customers"
            class="text-sm font-medium transition-colors hover:text-primary"
          >
            Customers
          </RouterLink>
        </nav>
        <div class="ml-auto flex items-center space-x-4">
          <Button @click="authStore.logout" variant="outline">
            Logout
          </Button>
        </div>
      </div>
    </header>
    <main class="container py-6">
      <RouterView />
    </main>
  </div>
</template>