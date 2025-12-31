<script>
export default {
  props: {
    initialSeconds: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      secondsLeft: this.initialSeconds,
      interval: null,
    }
  },

  computed: {
    formattedTime() {
      const min = Math.floor(this.secondsLeft / 60)
      const sec = this.secondsLeft % 60
      return `${min}:${sec.toString().padStart(2, '0')}`
    },
  },
  watch: {
    '$store.state.Otp.OTP_OBJ'() {
      if (this.$store.state.Otp.OTP_OBJ.status === 'success') {
        this.startTimer()
      }
    },
  },

  mounted() {
    this.startTimer()
  },

  beforeUnmount() {
    this.clearTimer()
  },
  methods: {
    startTimer() {
      this.clearTimer()
      this.interval = setInterval(() => {
        if (this.secondsLeft > 0) {
          this.secondsLeft--
        } else {
          this.clearTimer()
          this.$emit('finished')
        }
      }, 1000)
    },

    resendCode() {
      this.secondsLeft = this.initialSeconds
      this.$emit('resend')
    },

    clearTimer() {
      if (this.interval) {
        clearInterval(this.interval)
        this.interval = null
      }
    },
  },
}
</script>

<template>
  <div class="timer-wrapper">
    <div class="timer-card">
      <span class="label">REMAINING TIME</span>
      <span class="time">{{ formattedTime }}</span>
    </div>

    <!-- Resend Code -->
    <button v-if="secondsLeft === 0" class="resend" @click="resendCode">
      Resend Code
      <span class="icon">↻</span>
    </button>
  </div>
</template>

<style scoped>
.timer-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.timer-card {
  border-radius: 10px;
  background: #f2f3f5;
  padding: 14px 28px;
  text-align: center;
}

.label {
  display: block;
  margin-bottom: 4px;
  color: #8b8b8b;
  font-weight: 600;
  font-size: 10px;
  letter-spacing: 0.08em;
}

.time {
  color: #000;
  font-weight: 700;
  font-size: 22px;
}

/* Resend Code */
.resend {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  border: none;
  background: none;
  color: #0b4dba;
  font-weight: 600;
  font-size: 14px;
}

.resend:hover {
  text-decoration: underline;
}

.icon {
  font-size: 16px;
}
</style>
