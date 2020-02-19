<template>
  <div>
    <div class="content-modal">
      <button class="close hover" v-on:click="onClose">x</button>
      <h4 class="title">Password-protected entry</h4>
      <input
        class="input"
        ref="input"
        placeholder="Enter password"
        type="password"
        :class="{ error: hasError }"
        :value="currentValue"
        @input="onInputChange"
        @keyup.13="onSubmitPassword"
      />
      <p
        v-if="hasError"
        class="error-message"
      >
        Incorrect password. Please try again.
      </p>
    </div>
    <div class="textAlign paddingBottom">
      <button class="link" v-on:click="onSubmitPassword">
        View Portfolio
      </button>
    </div>
  </div>
</template>

<script>
import {BIRDEYE_PASSWORD} from '@/defs';

export default {
  data() {
    return {
      currentValue: '',
      hasError: false,
    };
  },
  props: {
    onClose: Function,
  },
  methods: {
    onInputChange(e) {
      e.preventDefault();
      let { value } = e.target;

      this.currentValue = value;
      this.$refs.input.value = value;

      this.$emit('onChange', value);
    },
    onSubmitPassword() {
      const isValidPassword = this.currentValue === atob(BIRDEYE_PASSWORD);
      this.hasError = !isValidPassword;

      if (isValidPassword) {
        this.$router.push({
          path: '/portfolio/birdeye',
          query: {
            password: this.currentValue,
          },
        });
      }
    },
  },
}
</script>

<style scoped>
.content-modal {
  height: auto;
  padding: 70px 100px 40px 100px;
  text-align: center;
  width: min-content;
}

.title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
}

.input {
  border: 2px solid var(--gray-color);
  border-radius: 8px;
  font-size: 17px;
  font-weight: 300;
  height: 58px;
  width: 400px;
  padding: 18px 25px;
  transition: border-color var(--transition-duration) var(--transition-curve);
  will-change: border-color;
}

.input:focus {
  border-color: #1976d2;
}

.input.error {
  border-color: var(--red-color);
}

.input::placeholder {
  color: var(--gray-color);
  transition: opacity var(--transition-duration) var(--transition-curve),
    transform var(--transition-duration) var(--transition-curve);
  will-change: opacity, transform;
}

.input:focus::placeholder {
  opacity: 0;
}

.input.error::placeholder {
  color: var(--red-color);
}

.error-message {
  color: var(--red-color);
  font-size: 15px;
  margin-top: 12px;
}

.p {
  font-size: 18px;
  text-align: center;
}

.close {
  color: #1976d2;
  border-top-right-radius: 10px;
  cursor: pointer;
  font-size: 17px;
  font-weight: 300;
  line-height: 30px;
  height: 30px;
  position: absolute;
  right: 0;
  top: 0;
  width: 30px;
}

.textAlign {
  text-align: center;
}

.link {
  border-radius: 50px;
  background-color: #1976d2;
  color: var(--white-color);
  cursor: pointer;
  font-size: 18px;
  padding: 10px 25px;
  transition: opacity var(--transition-duration) var(--transition-curve);
  will-change: background-color, opacity;
}

.link:hover {
  opacity: 0.5;
}

@media (max-width: 880px) {
  .content-modal {
    padding: 60px 40px 40px 40px;
  }

  .wave {
    height: 400px;
    width: 400px;
  }
}

@media (max-width: 580px) {
  .content-modal {
    padding: 20px 0;
  }

  .wave {
    height: 300px;
    width: 300px;
  }

  .input {
    width: 80vw;
    margin: 0 5vw;
  }
}
</style>
