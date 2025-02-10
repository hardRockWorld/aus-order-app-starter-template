<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../stores/auth';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

const authStore = useAuthStore();
const stats = ref({
  totalOrders: 0,
  pendingOrders: 0,
  totalCustomers: 0,
  revenue: 0,
});

onMounted(async () => {
  // Fetch dashboard stats from PocketBase
  try {
    const orders = await authStore.pb.collection('orders').getList(1, 50);
    const customers = await authStore.pb.collection('customers').getList(1, 50);

    stats.value = {
      totalOrders: orders.totalItems,
      pendingOrders: orders.items.filter((order) => order.status === 'pending').length,
      totalCustomers: customers.totalItems,
      revenue: orders.items.reduce((acc, order) => acc + (order.total || 0), 0),
    };
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
  }
});
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium"> Total Orders </CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">{{ stats.totalOrders }}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium"> Pending Orders </CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">{{ stats.pendingOrders }}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium"> Total Customers </CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">{{ stats.totalCustomers }}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium"> Total Revenue </CardTitle>
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">${{ stats.revenue.toFixed(2) }}</div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
