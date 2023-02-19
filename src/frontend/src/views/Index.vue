<template>
  <div>
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>
          <BuilderDoughSelector />
          <BuilderSizeSelector />
          <BuilderIngredientsSelector />

          <div class="content__pizza">
            <label class="input">
              <span class="visually-hidden">Название пиццы</span>
              <input
                :value="pizzaName"
                type="text"
                name="pizza_name"
                placeholder="Введите название пиццы"
                @input="$store.commit('Builder/setPizzaName', $event.target.value)"
              />
            </label>
            <BuilderPizzaView />
            <div class="content__result">
              <p>Итого: {{ finishSum }} ₽</p>
              <button
                type="button"
                class="button"
                :disabled="isButtonDisabled"
                @click="cookPizza"
              >
                Готовьте!
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import { INGREDIENTS, SAUCES, DOUGHS, SIZES } from "@/common/constants";
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "index",
  components: {
    BuilderPizzaView,
    BuilderIngredientsSelector,
    BuilderSizeSelector,
    BuilderDoughSelector,
  },
  data() {
    return {
      DOUGHS,
      SAUCES,
      SIZES,
      INGREDIENTS,
      sumInHeader: 0,
    };
  },
  methods: {
    cookPizza() {
      this.sumInHeader = this.finishSum;
      const pizza = {
        selectedDough: this.selectedDough,
        selectedSauce: this.selectedSauce,
        ingredientsCount: this.ingredientsCount,
        selectedSize: this.selectedSize,
        pizzaName: this.pizzaName,
      };
      this.$store.commit("Cart/addPizza", pizza);
      this.$store.commit("Builder/clearState");
    },
  },
  computed: {
    isButtonDisabled() {
      const ingSum = this.ingredientsCount.reduce((sum, item) => {
        return sum + item;
      }, 0);

      return ingSum === 0 || this.pizzaName.length === 0;
    },
    ...mapState("Builder", [
      "selectedDough",
      "selectedSauce",
      "ingredientsCount",
      "selectedSize",
      "pizzaName",
    ]),
    ...mapGetters("Builder", ["finishSum"]),
  },
  watch: {
    sumInHeader(newValue) {
      this.$emit("changeValue", newValue);
    },
  },
};
</script>

<style scoped></style>
