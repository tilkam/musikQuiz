<template>
    <div>
        <div class="category-container">
            <CategoryView />
            <div class="quiz-container">
                <QuizView :categoryId="categoryId"  :categoryString="categoryString"></QuizView>
            </div>
        </div>


    </div>
</template>

<script>
import CategoryView from './CategoryView.vue';
import QuizView from './QuizView.vue';






export default {
    components: {
        CategoryView,
        QuizView,
    },
    props: {
        songs: {
            type: Array
        },
        categoryId: {
            type: Number,
            required: false,
        },
        categoryString: {
            type: String,
            required: false,
        },
        song: {
            type: Array,
            required: false
        },
    }
}



</script>