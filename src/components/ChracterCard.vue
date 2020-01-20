<template>
    <md-card>
        <md-card-header>
            <div>
                <div class="md-title">{{ person.name }}</div>
                <div class="md-subhead">{{ person.birth_year }}</div>
            </div>
            <md-card-actions md-alignment="space-between">
                <md-card-expand-trigger>
                    <md-button class="md-icon-button">
                    <md-icon>keyboard_arrow_down</md-icon>
                    </md-button>
                </md-card-expand-trigger>
            </md-card-actions>
        </md-card-header>
        <md-card-expand>
            <md-card-expand-content>
                <md-card-content>
                    <div class="list-container">
                        <ul class="trait-list">
                            <li>Gender: {{ person.gender }}</li>
                            <li>Height: {{ person.height }}</li>
                            <li>Weight: {{ person.mass }}</li>
                        </ul>
                        <ul class="trait-list">
                            <li>Hair color: {{ person.hair_color }}</li>
                            <li>Skin color: {{ person.skin_color }}</li>
                            <li>Eye color: {{ person.eye_color }}</li>
                        </ul>
                    </div>
                </md-card-content>
            </md-card-expand-content>
      </md-card-expand>
    </md-card>
</template>
<script>
export default {
    props: ['person']
}
</script>
<style>
.md-card {
    margin-bottom: 15px;
}
.md-card-header {
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
}
.md-card.md-theme-default {
    background-color: #757575;
    color: #ffffff;
}
.list-container {
    display: flex;
    justify-content: center;
}
.trait-list {
    list-style: none;
    font-size: 18px;
}
.trait-list:first-child {
    margin-right: 100px;
}
.trait-list > li {
    margin-bottom: 5px;
}
</style>