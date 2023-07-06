import React from 'react'
import Filter from './Filter'
import Sort from './Sort'

const FilterSort = () => {

    return (
        <section>
            <filter className='flex items-center'>

            </filter>
            <div className='md:hidden flex items-center gap-3 px-2'>
                <Filter />
                <Sort />
            </div>

            {/* <>
                <Drawer position='top' opened={opened} onClose={close} title="Authentication">
                </Drawer>

                <Group position="center">
                    <Button onClick={open}>Open Drawer</Button>
                </Group>
            </> */}
        </section>
    )
}

export default FilterSort;