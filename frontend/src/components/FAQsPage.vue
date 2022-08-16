<!-- FAQs Section -->
<template>
  <v-card flat>
    <v-card-text>
      <p>
        <v-container fluid>
          <!-- We use the textarea from vuetify: https://next.vuetifyjs.com/en/components/textareas/
                We can collect questions in the textarea. -->
          <v-textarea
            name="input-7-1"
            filled
            label="FAQs"
            auto-grow
            prepend-icon="mdi-comment"
          ></v-textarea>
        </v-container>
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
  }),
}
</script>