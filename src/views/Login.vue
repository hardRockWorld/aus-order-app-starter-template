<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card'

const router = useRouter()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const error = ref('')

async function handleLogin() {
  try {
    await authStore.login(email.value, password.value)
    router.push('/')
  } catch (err) {
    error.value = 'Invalid credentials'
  }
}
</script>

<template>
  <Card class="w-[350px]">
    <CardHeader>
      <CardTitle>Login</CardTitle>
    </CardHeader>
    <CardContent>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div class="space-y-2">
          <Input
            v-model="email"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div class="space-y-2">
          <Input
            v-model="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <p v-if="error" class="text-sm text-destructive">{{ error }}</p>
        <Button type="submit" class="w-full">
          Sign In
        </Button>
      </form>
    </CardContent>
  </Card>
</template>