import { Modal, Image, Embed } from "semantic-ui-react"
import React from "react"
import CatRun from '../assets/CatRun.gif'

export default function MyModal() {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Image size='small' className="marquee" src={CatRun} />}
        >
            <Modal.Content>
                <Embed
                    id='e1OWVKtAp7s'
                    placeholder='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg/1200px-YouTube_play_button_icon_%282013%E2%80%932017%29.svg.png'
                    source='youtube'
                />
            </Modal.Content>
        </Modal>
    )
}
